import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePodcast } from "../hooks/usePodcast";
import { PlayerValues } from "../models/player";

const defaultProvider: PlayerValues = {
  playList: [],
  currentIndex: 0,
  isPlaying: false,
  volumeValue: 0.4,
  progressValue: 0,
  durationValue: 0,
  setCurrentIndex: () => {},
  handleChangeProgress: () => {},
  handleChangeVolume: () => {},
  handleTogglePlay: () => {},
  handleNextTrack: () => {},
  handleLastTrack: () => {},
};

const PlayerContext = createContext<PlayerValues>(defaultProvider);

type Props = {
  children: ReactNode;
};

const PlayerProvider = ({ children }: Props) => {
  const { podcastEpisodesList } = usePodcast();

  const audio = useRef<HTMLAudioElement>(new Audio());

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeValue, setVolumeValue] = useState(0.4);
  const [progressValue, setProgressValue] = useState(0);

  const tracks = useMemo(() => {
    return podcastEpisodesList
      .filter((episode) => episode.episodeUrl)
      .map((episode) => episode.episodeUrl) as string[];
  }, [podcastEpisodesList]);

  useEffect(() => {
    if (tracks.length) {
      setCurrentIndex(0);
    }
  }, [tracks]);

  useEffect(() => {
    if (tracks.length) {
      if (audio.current) {
        audio?.current?.pause();
        setIsPlaying(false);
        audio.current.src = tracks[currentIndex];
        audio?.current?.play().catch(handleError);
        setIsPlaying(true);
      }
    }
  }, [currentIndex, tracks]);

  const handleTogglePlay = () => {
    if (audio.current.src) {
      isPlaying
        ? audio.current.pause()
        : audio?.current.play().catch(handleError);
      setIsPlaying((prevState) => !prevState);
    }
  };

  const handleError = (error: string) => {
    if (error.toString().includes("no supported")) {
      alert(error);
    }
  };

  /* CONTROLS */

  const handleChangeVolume = (value: number) => {
    setVolumeValue(value);

    if (audio?.current) {
      audio.current.volume = value;
    }
  };
  const handleChangeProgress = (value: number) => {
    if (audio.current) {
      audio.current.currentTime = value;
    }
  };

  const handleNextTrack = useCallback(() => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < tracks.length) {
      audio.current.pause();
      setCurrentIndex(nextIndex);
    } else {
      audio.current.pause();
      setCurrentIndex(0);
    }
  }, [currentIndex, tracks.length]);

  const handleLastTrack = useCallback(() => {
    setCurrentIndex((prevState) => prevState - 1);
  }, []);

  /* AUDIO EVENTS */

  useEffect(() => {
    const currentAudio = audio.current;
    const handleTimeUpdate = () => {
      currentAudio && setProgressValue(currentAudio.currentTime);
    };
    const handleEndendTrack = () => {
      handleNextTrack();
    };

    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("ended", handleEndendTrack);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
        currentAudio.removeEventListener("ended", handleEndendTrack);
      }
    };
  }, [handleNextTrack, tracks]);

  const values = {
    playList: podcastEpisodesList,
    currentIndex,
    setCurrentIndex,
    audioRef: audio,
    isPlaying,
    volumeValue,
    progressValue,
    durationValue: audio?.current?.duration || 0,
    handleChangeProgress,
    handleChangeVolume,
    handleTogglePlay,
    handleNextTrack,
    handleLastTrack,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};

export { PlayerContext, PlayerProvider };

import { Dispatch } from "react";
import { PodcastEpisode } from "./podcast";

export interface PlayerValues {
  playList: PodcastEpisode[];
  currentIndex: number;
  isPlaying: boolean;
  volumeValue: number;
  progressValue: number;
  durationValue: number;
  handleChangeProgress: (value: number) => void;
  handleChangeVolume: (value: number) => void;
  setCurrentIndex: Dispatch<React.SetStateAction<number>>;
  handleTogglePlay: () => void;
  handleNextTrack: () => void;
  handleLastTrack: () => void;
}

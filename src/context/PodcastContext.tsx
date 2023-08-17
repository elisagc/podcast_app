import { ReactNode, createContext, useEffect, useState } from "react";
import { getPodcastEpisodes, searchPodcast } from "../api/podcast";
import useDebounce from "../hooks/useDebounce";
import {
  PodcastEpisode,
  PodcastSearch,
  PodcastValues,
} from "../models/podcast";

const defaultProvider: PodcastValues = {
  podcastSearchList: null,
  podcastEpisodesList: [],
  setSearchTerm: () => {},
  setPodcastSelectedId: () => {},
  podcastSelectedId: undefined,
  loading: true,
};

const PodcastContext = createContext<PodcastValues>(defaultProvider);

type Props = {
  children: ReactNode;
};

const PodcastProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [podcastSelectedId, setPodcastSelectedId] = useState<number>();
  const [podcastSearchList, setPodcastSearchList] = useState<
    PodcastSearch[] | null
  >(defaultProvider.podcastSearchList);
  const [podcastEpisodesList, setpodcastEpisodesList] = useState<
    PodcastEpisode[]
  >(defaultProvider.podcastEpisodesList);

  const [loading, setLoading] = useState(true);
  const { debouncedValue } = useDebounce(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (debouncedValue.length > 0) {
          const data = await searchPodcast({ term: debouncedValue });
          setPodcastSearchList(data);
        } else {
          setPodcastSearchList(defaultProvider.podcastSearchList);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [debouncedValue]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (podcastSelectedId) {
          const data = await getPodcastEpisodes({
            collectionId: podcastSelectedId,
          });
          setpodcastEpisodesList(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [podcastSelectedId]);

  const values = {
    podcastSearchList,
    podcastEpisodesList,
    setSearchTerm,
    podcastSelectedId,
    setPodcastSelectedId,
    loading,
  };

  return (
    <PodcastContext.Provider value={values}>{children}</PodcastContext.Provider>
  );
};

export { PodcastContext, PodcastProvider };

import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export const usePodcast = () => useContext(PodcastContext);

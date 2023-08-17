import { PodcastResponse } from "../models/podcast";
import api from "./config";

interface SearchParams {
  term: string;
  limit?: number;
}

interface CollectionParams {
  collectionId: number;
  limit?: number;
}
const searchPodcast = async ({ term, limit = 10 }: SearchParams) => {
  const response = await api.get<PodcastResponse>(
    `/search?term=${term.replace(/\s/g, "+")}&limit=${limit}&entity=podcast`
  );

  return response.data.results;
};

const getPodcastEpisodes = async ({
  collectionId,
  limit = 10,
}: CollectionParams) => {
  const response = await api.get<PodcastResponse>(
    `/lookup?id=${collectionId}&media=podcast&entity=podcastEpisode&limit=${limit}`
  );

  return response.data.results;
};
export { searchPodcast, getPodcastEpisodes };

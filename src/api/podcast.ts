import { PodcastCollectionResponse } from "../models/collection";
import { PodcastSearchResponse } from "../models/podcast";
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
  const response = await api.get<PodcastSearchResponse>(
    `/search?term=${term.replace(/\s/g, "+")}&limit=${limit}&entity=podcast`
  );

  return response.data.results;
};

const getPodcastCollection = async ({
  collectionId,
  limit = 10,
}: CollectionParams) => {
  const response = await api.get<PodcastCollectionResponse>(
    `/lookup?id=${collectionId}&country=US&media=podcast&entity=podcastEpisode&limit=${limit}`
  );

  return response.data.results;
};
export { searchPodcast, getPodcastCollection };

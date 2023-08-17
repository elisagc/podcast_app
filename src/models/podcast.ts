import { ReactNode } from "react";

export interface PodcastResponse {
  resultCount: number;
  results: PodcastSearch[] | PodcastEpisode[];
}
export interface PodcastSearch {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}
export interface PodcastEpisode extends PodcastSearch {
  episodeContentType?: string;
  episodeFileExtension?: string;
  closedCaptioning?: string;
  previewUrl?: string;
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  artistIds?: number[];
  episodeUrl?: string;
}

interface Row {
  row: PodcastSearch | PodcastEpisode;
  index: number;
}
export interface PodcastColumn {
  width?: string | number;
  header: string | ReactNode;
  render: (row: Row) => ReactNode;
}

export interface PodcastValues {
  podcastSearchList: PodcastSearch[] | null;
  podcastEpisodesList: PodcastEpisode[];
  setSearchTerm: (x: string) => void;
  setPodcastSelectedId: (x: number) => void;
  podcastSelectedId: number | undefined;
  loading: boolean;
}

import { ReactNode } from "react";

export interface PodcastResponse {
  resultCount: number;
  results: Podcast[];
}

export interface Podcast {
  wrapperType: WrapperType;
  kind: Kind;
  collectionId?: number;
  trackId: number;
  artistName: string;
  collectionName?: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName: string;
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  releaseDate: string;
  collectionExplicitness: Explicitness;
  trackExplicitness: Explicitness;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  contentAdvisoryRating?: ContentAdvisoryRating;
  shortDescription?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
  artistId?: number;
  artistViewUrl?: string;
  discCount?: number;
  discNumber?: number;
  isStreamable?: boolean;
  trackRentalPrice?: number;
  trackHdRentalPrice?: number;
  collectionArtistName?: CollectionArtistName;
}

export enum CollectionArtistName {
  JackJohnson = "Jack Johnson",
  TomRussell = "Tom Russell",
  VariousArtists = "Various Artists",
}

export enum Explicitness {
  Explicit = "explicit",
  NotExplicit = "notExplicit",
}

export enum ContentAdvisoryRating {
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
  Unrated = "Unrated",
}

export enum Country {
  Usa = "USA",
}

export enum Currency {
  Usd = "USD",
}

export enum Kind {
  FeatureMovie = "feature-movie",
  Song = "song",
}

export enum WrapperType {
  Track = "track",
}

export interface PodcastColumn {
  header: string | ReactNode;
  render: (row: Podcast) => ReactNode;
}

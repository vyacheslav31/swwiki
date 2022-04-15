import SwapiResource from "./SwapiResource";

export interface Film extends SwapiResource  {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
};

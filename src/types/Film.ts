type Film = {
  name?: string;
  title?: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  created: string;
  edited: string;
  url: string;
};

export default Film;

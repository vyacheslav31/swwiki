import Film from "../types/Film";

interface FilmDetailsProps {
  film: Film;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <>
      <p>Name: {film.title}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Episode #: {film.episode_id}</p>
      <p>Summary: </p>
      {film.opening_crawl}
    </>
  );
};

export default FilmDetails;

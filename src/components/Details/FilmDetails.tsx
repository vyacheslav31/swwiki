import { Card } from "antd";
import Film from "../../types/Film";

/**
 * FilmDetails component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {film: Film} The film details
 */

interface FilmDetailsProps {
  film: Film;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <Card style={{ flex: 3 }}>
      <p>
        <b>Name</b>:<p data-testid="film-name">{film.title}</p>
      </p>
      <p>
        <b>Release Date</b>:
        <p data-testid="film-release">{film.release_date}</p>
      </p>
      <p>
        <b>Director</b>:<p data-testid="film-director">{film.director}</p>
      </p>
      <p>
        <b>Producer</b>:<p data-testid="film-producer">{film.producer}</p>
      </p>
      <p>
        <b>Episode #</b>:<p data-testid="film-episode">{film.episode_id}</p>
      </p>
      <p>
        <b>Summary</b>:{" "}
      </p>
      <p data-testid="film-summary">{film.opening_crawl}</p>
    </Card>
  );
};

export default FilmDetails;

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
        <b>Name</b>: {film.title}
      </p>
      <p>
        <b>Release Date</b>: {film.release_date}
      </p>
      <p>
        <b>Director</b>: {film.director}
      </p>
      <p>
        <b>Producer</b>: {film.producer}
      </p>
      <p>
        <b>Episode #</b>: {film.episode_id}
      </p>
      <p>
        <b>Summary</b>:{" "}
      </p>
      {film.opening_crawl}
    </Card>
  );
};

export default FilmDetails;

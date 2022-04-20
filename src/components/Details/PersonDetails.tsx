import { Card } from "antd";
import Person from "../../types/Person";

/**
 * PersonDetails component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {person: Person} The character details
 */

interface PersonDetailsProps {
  person: Person;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <Card style={{ flex: 3 }}>
      <p>
        <b>Name:</b> <p data-testid="person-name">{person.name}</p>
      </p>
      <p>
        <b>Birth Year</b>: <p data-testid="person-birth_year">{person.birth_year}</p>
      </p>
      <p>
        <b>Eye Color</b>: <p data-testid="person-eye_color">{person.eye_color}</p>
      </p>
      <p>
        <b>Gender</b>: <p data-testid="person-gender">{person.gender}</p>
      </p>
      <p>
        <b>Hair Color</b>: <p data-testid="person-hair_color">{person.hair_color}</p>
      </p>
      <p>
        <b>Height</b>: <p data-testid="person-height">{person.height}</p>
      </p>
      <p>
        <b>Weight</b>: <p data-testid="person-mass">{person.mass}</p>
      </p>
      <p>
        <b>Skin Color</b>: <p data-testid="person-skin_color">{person.skin_color}</p>
      </p>
      <p>
        <b>Homeworld</b>: <p data-testid="person-homeworld">{person.homeworld}</p>
      </p>
    </Card>
  );
};

export default PersonDetails;

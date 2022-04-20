import { Card } from "antd";
import Person from "../../types/Person";

interface PersonDetailsProps {
  person: Person;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <Card style={{ flex: 3 }}>
      <p>
        <b>Name:</b> {person.name}
      </p>
      <p>
        <b>Birth Year</b>: {person.birth_year}
      </p>
      <p>
        <b>Eye Color</b>: {person.birth_year}
      </p>
      <p>
        <b>Gender</b>: {person.gender}
      </p>
      <p>
        <b>Hair Color</b>: {person.hair_color}
      </p>
      <p>
        <b>Height</b>: {person.height}
      </p>
      <p>
        <b>Weight</b>: {person.mass}
      </p>
      <p>
        <b>Skin Color</b>: {person.skin_color}
      </p>
      <p>
        <b>Homeworld</b>: {person.homeworld}
      </p>
    </Card>
  );
};

export default PersonDetails;

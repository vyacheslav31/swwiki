import Person from "../types/Person";

interface PersonDetailsProps {
  person: Person;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <>
      <p>Name: {person.name}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Eye Color: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Height: {person.height}</p>
      <p>Weight: {person.mass}</p>
      <p>Skin Color: {person.skin_color}</p>
      <p>Homeworld: {person.homeworld}</p>
    </>
  );
};

export default PersonDetails;

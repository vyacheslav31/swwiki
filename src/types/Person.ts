import SwapiResource from "./SwapiResource";

export default interface Person extends SwapiResource {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
}
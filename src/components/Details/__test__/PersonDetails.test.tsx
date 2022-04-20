import { render, screen } from "@testing-library/react";
import PersonDetails from "../PersonDetails";
import "@testing-library/jest-dom";
import Person from "../../../types/Person";

const MockPerson: Person = {
  name: "Vyacheslav Gorbov",
  title: "string",
  birth_year: "1993",
  eye_color: "green",
  gender: "Male",
  hair_color: "Brown",
  height: "170cm",
  mass: "80kg",
  skin_color: "fair",
  homeworld: "Earth",
  films: [],
  species: [],
  starships: [],
  vehicles: [],
  url: "",
  created: "",
  edited: "",
};

describe("test the PersonDetails component", () => {
  test("should render the provided the Person name", () => {
    render(<PersonDetails person={MockPerson} />);
    const name = screen.getByTestId("person-name");
    expect(name).toBeInTheDocument();
  });
  test("should render the provided the Person birth year", () => {
    render(<PersonDetails person={MockPerson} />);
    const year = screen.getByTestId("person-birth_year");
    expect(year).toBeInTheDocument();
  });
  test("should render the provided the Person eye color", () => {
    render(<PersonDetails person={MockPerson} />);
    const eye = screen.getByTestId("person-eye_color");
    expect(eye).toBeInTheDocument();
  });
  test("should render the provided the Person gender", () => {
    render(<PersonDetails person={MockPerson} />);
    const gender = screen.getByTestId("person-gender");
    expect(gender).toBeInTheDocument();
  });
  test("should render the provided the Person hair color", () => {
    render(<PersonDetails person={MockPerson} />);
    const hair = screen.getByTestId("person-hair_color");
    expect(hair).toBeInTheDocument();
  });
  test("should render the provided the Person person height", () => {
    render(<PersonDetails person={MockPerson} />);
    const height = screen.getByTestId("person-height");
    expect(height).toBeInTheDocument();
  });
  test("should render the provided the Person mass", () => {
    render(<PersonDetails person={MockPerson} />);
    const mass = screen.getByTestId("person-mass");
    expect(mass).toBeInTheDocument();
  });

  test("should render the provided the Person skin color", () => {
    render(<PersonDetails person={MockPerson} />);
    const skin = screen.getByTestId("person-skin_color");
    expect(skin).toBeInTheDocument();
  });

  test("should render the provided the Person homeworld", () => {
    render(<PersonDetails person={MockPerson} />);
    const homeworld = screen.getByTestId("person-homeworld");
    expect(homeworld).toBeInTheDocument();
  });
});

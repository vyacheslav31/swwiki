import { render, screen } from "@testing-library/react";
import PlanetDetails from "../PlanetDetails";
import "@testing-library/jest-dom";
import Planet from "../../../types/Planet";

const MockPlanet: Planet = {
    name: " Earth",
    title: "",
    diameter: "200",
    rotation_period: "24 hours",
    orbital_period: "1 year",
    gravity: "1 standard",
    population: "7 billion",
    climate: "temperate",
    terrain: "grasslands, jungle, desert and tundra",
    surface_water: "30",
    residents: [],
    films: [],
    url: "",
    created: "",
    edited: "",
}

describe("test the PlanetDetails component", () => {
    test("should render the provided the Planet name", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const name = screen.getByText("Earth");
        expect(name).toBeInTheDocument();
    });
    test("should render the provided the Planet diameter", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const diameter = screen.getByText("200");
        expect(diameter).toBeInTheDocument();
    });
    test("should render the provided the Planet rotation period", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const rotation = screen.getByText("24 hours.");
        expect(rotation).toBeInTheDocument();
    });
    test("should render the provided the Planet orbital period", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const orbit = screen.getByText("1 year");
        expect(orbit).toBeInTheDocument();
    });
    test("should render the provided the Planet gravity", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const gravity = screen.getByText("1 standard");
        expect(gravity).toBeInTheDocument();
    });
    test("should render the provided the Planet population", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const population = screen.getByText("7 billion");
        expect(population).toBeInTheDocument();
    });
    test("should render the provided the Planet climate", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const climate = screen.getByText("temperate");
        expect(climate).toBeInTheDocument();
    });

    test("should render the provided the Planet terrain", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const terrain = screen.getByText("grasslands, jungle, desert and tundra");
        expect(terrain).toBeInTheDocument();
    });

    test("should render the provided the Planet surface water", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const water = screen.getByText("30");
        expect(water).toBeInTheDocument();
    });
});
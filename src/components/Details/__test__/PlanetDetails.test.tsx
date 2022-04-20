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
        const name = screen.getByTestId("planet-name");
        expect(name).toBeInTheDocument();
    });
    test("should render the provided the Planet diameter", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const diameter = screen.getByTestId("planet-diameter");
        expect(diameter).toBeInTheDocument();
    });
    test("should render the provided the Planet rotation period", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const rotation = screen.getByTestId("planet-rotation");
        expect(rotation).toBeInTheDocument();
    });
    test("should render the provided the Planet orbital period", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const orbit = screen.getByTestId("planet-orbital");
        expect(orbit).toBeInTheDocument();
    });
    test("should render the provided the Planet gravity", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const gravity = screen.getByTestId("planet-gravity");
        expect(gravity).toBeInTheDocument();
    });
    test("should render the provided the Planet population", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const population = screen.getByTestId("planet-population");
        expect(population).toBeInTheDocument();
    });
    test("should render the provided the Planet climate", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const climate = screen.getByTestId("planet-climate");
        expect(climate).toBeInTheDocument();
    });

    test("should render the provided the Planet terrain", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const terrain = screen.getByTestId("planet-terrain");
        expect(terrain).toBeInTheDocument();
    });

    test("should render the provided the Planet surface water", () => {
        render(<PlanetDetails planet={MockPlanet} />)
        const water = screen.getByTestId("planet-surface_water");
        expect(water).toBeInTheDocument();
    });
});
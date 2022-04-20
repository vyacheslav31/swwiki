import { render, screen } from "@testing-library/react";
import FilmDetails from "../FilmDetails";
import "@testing-library/jest-dom";
import Film from "../../../types/Film";

const MockFilm: Film = {
    name: "N/A",
    title: "How to Train a Dragon",
    episode_id: 3789,
    opening_crawl: "A movie about dragons.",
    director: "Chris Sanders",
    producer: "Dean DeBlois",
    release_date: "03/26/10",
    starships: [],
    vehicles: [],
    characters: [],
    planets: [],
    created: "N/A",
    edited: "N/A",
    url: "N/A",
}

describe("test the FilmDetails component", () => {
    test("should render the provided the film title", () => {
        render(<FilmDetails film={MockFilm} />)
        const titleEl = screen.getByText("How to Train a Dragon");
        expect(titleEl).toBeInTheDocument();
    });
    test("should render the provided the film episode id", () => {
        render(<FilmDetails film={MockFilm} />)
        const episode = screen.getByText(3789);
        expect(episode).toBeInTheDocument();
    });
    test("should render the provided the film summary", () => {
        render(<FilmDetails film={MockFilm} />)
        const summary = screen.getByText("A movie about dragons.");
        expect(summary).toBeInTheDocument();
    });
    test("should render the provided the film director", () => {
        render(<FilmDetails film={MockFilm} />)
        const director = screen.getByText("Chris Sanders");
        expect(director).toBeInTheDocument();
    });
    test("should render the provided the film producer", () => {
        render(<FilmDetails film={MockFilm} />)
        const producer = screen.getByText("Dean DeBlois");
        expect(producer).toBeInTheDocument();
    });
    test("should render the provided the film release date", () => {
        render(<FilmDetails film={MockFilm} />)
        const date = screen.getByText("03/26/10");
        expect(date).toBeInTheDocument();
    });
});
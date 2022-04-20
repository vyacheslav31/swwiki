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
        const titleEl = screen.getByTestId("film-name");
        expect(titleEl).toHaveTextContent("How to Train a Dragon");
    });
    test("should render the provided the film episode id", () => {
        render(<FilmDetails film={MockFilm} />)
        const episode = screen.getByTestId("film-episode");
        expect(episode).toHaveTextContent("3789");
    });
    test("should render the provided the film summary", () => {
        render(<FilmDetails film={MockFilm} />)
        const summary = screen.getByTestId("film-summary");
        expect(summary).toHaveTextContent("A movie about dragons.");
    });
    test("should render the provided the film director", () => {
        render(<FilmDetails film={MockFilm} />)
        const director = screen.getByTestId("film-director");
        expect(director).toHaveTextContent("Chris Sanders");
    });
    test("should render the provided the film producer", () => {
        render(<FilmDetails film={MockFilm} />)
        const producer = screen.getByTestId("film-producer");
        expect(producer).toHaveTextContent("Dean DeBlois");
    });
    test("should render the provided the film release date", () => {
        render(<FilmDetails film={MockFilm} />)
        const date = screen.getByTestId("film-release");
        expect(date).toHaveTextContent("03/26/10");
    });
});
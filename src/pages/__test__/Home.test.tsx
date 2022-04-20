
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

const MockHome = () => {
    return <BrowserRouter>
        <Home />
    </BrowserRouter>
}


describe("test the Home component", () => {
    test("make sure the title is rendered", () => {
        render(<MockHome />);
        const h4Element = screen.getByRole('heading', { level: 4 });
        expect(h4Element).toBeInTheDocument();
        expect(h4Element.textContent).toBe("> Home");
    });

    test("ensure the people resource type card is rendered", () => {
        render(<MockHome />);
        const peopleCardEl = screen.getByTestId('people-clicktest');
        expect(peopleCardEl.firstChild?.textContent === "PEOPLE").toBeTruthy();
    });

    test("ensure the films resource type card is rendered", () => {
        render(<MockHome />);
        const filmsCardEl = screen.getByTestId('films-clicktest');
        expect(filmsCardEl.firstChild?.textContent === "FILMS").toBeTruthy();
    });

    test("ensure the planets resource type card is rendered", () => {
        render(<MockHome />);
        const planetsCardEl = screen.getByTestId('planets-clicktest');
        expect(planetsCardEl.firstChild?.textContent === "PLANETS").toBeTruthy();
    });


    test("there should be a link leading to the people route", async () => {
        render(<MockHome />);
        const peopleLink = screen.getByTestId('home-to-people-card');
        expect(peopleLink).toHaveAttribute("href", "/people?page=1");
    });

    test("there should be a link leading to the films route", async () => {
        render(<MockHome />);
        const filmsLink = screen.getByTestId('home-to-films-card');
        expect(filmsLink).toHaveAttribute("href", "/films?page=1");
    });

    test("there should be a link leading planets route", async () => {
        render(<MockHome />);
        const planetsLink = screen.getByTestId('home-to-planets-card');
        expect(planetsLink).toHaveAttribute("href", "/planets?page=1");
    });
});


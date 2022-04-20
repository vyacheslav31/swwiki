
import { render, screen, waitFor } from "@testing-library/react";
import Layout from '../Layout';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

const MockLayout = () => {
    return <BrowserRouter>
        <Layout />
    </BrowserRouter>
}

describe("test the Layout component", () => {
    test("should render the all the layout skeleton elements", async () => {
        render(<MockLayout />);
        // should render the header
        const headerEl = screen.getByTestId("body-header");
        await waitFor(() => {
            expect(headerEl).toBeInTheDocument();
        });

        // should render the menu
        const menuEl = screen.getByTestId("body-menu");
        expect(menuEl).toBeInTheDocument();

        // should render the home menu item
        const homeLinkEl = screen.getByTestId("home-menuitem");
        expect(homeLinkEl).toBeInTheDocument();

        // should render the people menu item
        const peopleLinkEl = screen.getByTestId("people-menuitem");
        expect(peopleLinkEl).toBeInTheDocument();

        // should render the films menu item
        const filmsLinkEl = screen.getByTestId("films-menuitem");
        expect(filmsLinkEl).toBeInTheDocument();

        // should render the planets menu item
        const planetsLinkEl = screen.getByTestId("planets-menuitem");
        expect(planetsLinkEl).toBeInTheDocument();

        // should render the content
        const contentEl = screen.getByTestId("body-content");
        expect(contentEl).toBeInTheDocument();

        // should render the footer
        const footerEl = screen.getByTestId("body-footer");
        expect(footerEl).toBeInTheDocument();
    });

    test("there should be 4 links in the header", async () => {
        render(<MockLayout />);
        const linkEls = screen.getAllByRole("link");
        await waitFor(() => {
            expect(linkEls.length).toBe(4);
        });
    });

    test("there should be a link leading home", async () => {
        render(<MockLayout />);
        const homeLink = screen.getByRole("link", { name: /Home/i })
        await waitFor(() => {
            expect(homeLink).toHaveAttribute("href", "/");
        });
    });

    test("there should be a link leading to the people route", async () => {
        render(<MockLayout />);
        const peopleLink = screen.getByRole("link", { name: /People/i })
        await waitFor(() => {
            expect(peopleLink).toHaveAttribute("href", "/people?page=1");
        });
    });

    test("there should be a link leading to the films route", async () => {
        render(<MockLayout />);
        const filmsLink = screen.getByRole("link", { name: /Films/i })
        await waitFor(() => {
            expect(filmsLink).toHaveAttribute("href", "/films?page=1");
        });
    });

    test("there should be a link leading planets route", async () => {
        render(<MockLayout />);
        const planetsLink = screen.getByRole("link", { name: /Planets/i })
        await waitFor(() => {
            expect(planetsLink).toHaveAttribute("href", "/planets?page=1");
        });
    });
})

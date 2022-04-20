import { render, screen, waitFor } from "@testing-library/react";
import Layout from "../Layout";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockLayout = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

describe("test the Layout component", () => {
  test("should render the headers", async () => {
    render(<MockLayout />);
    const headerEl = screen.getByTestId("body-header");
    expect(headerEl).toBeInTheDocument();
  });

  test("should render the menu", async () => {
    render(<MockLayout />);
    const menuEl = screen.getByTestId("body-menu");
    expect(menuEl).toBeInTheDocument();
  });

  test("should render the home menu item", async () => {
    const homeLinkEl = screen.getByTestId("home-menuitem");
    expect(homeLinkEl).toBeInTheDocument();
  });

  test("should render the people menu item", async () => {
    const peopleLinkEl = screen.getByTestId("people-menuitem");
    expect(peopleLinkEl).toBeInTheDocument();
  });

  test("should render the films menu item", async () => {
    const filmsLinkEl = screen.getByTestId("films-menuitem");
    expect(filmsLinkEl).toBeInTheDocument();
  });

  test("should render the planets menu item", async () => {
    const planetsLinkEl = screen.getByTestId("planets-menuitem");
    expect(planetsLinkEl).toBeInTheDocument();
  });

  test("should render the content", async () => {
    const contentEl = screen.getByTestId("body-content");
    expect(contentEl).toBeInTheDocument();
  });

  test("should render the footer", async () => {
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
    const homeLink = screen.getByRole("link", { name: /Home/i });
    await waitFor(() => {
      expect(homeLink).toHaveAttribute("href", "/");
    });
  });

  test("there should be a link leading to the people route", async () => {
    render(<MockLayout />);
    const peopleLink = screen.getByRole("link", { name: /People/i });
    await waitFor(() => {
      expect(peopleLink).toHaveAttribute("href", "/people?page=1");
    });
  });

  test("there should be a link leading to the films route", async () => {
    render(<MockLayout />);
    const filmsLink = screen.getByRole("link", { name: /Films/i });
    await waitFor(() => {
      expect(filmsLink).toHaveAttribute("href", "/films?page=1");
    });
  });

  test("there should be a link leading planets route", async () => {
    render(<MockLayout />);
    const planetsLink = screen.getByRole("link", { name: /Planets/i });
    await waitFor(() => {
      expect(planetsLink).toHaveAttribute("href", "/planets?page=1");
    });
  });
});

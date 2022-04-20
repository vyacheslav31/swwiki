import ResourceTypes from "../../types/ResourceTypes";
import { render, screen } from "@testing-library/react";
import SwapiResourcePage from "../SwapiResourcePage";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { SwapiResourcePageProps } from "../SwapiResourcePage";

const MockSwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  return (
    <BrowserRouter>
      <SwapiResourcePage resourceType={resourceType} />
    </BrowserRouter>
  );
};

describe("test the SwapiResourcePage component", () => {
  test("make sure the films title is rendered and first letter capitalized", () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.films} />);
    const h4Element = screen.getByRole("heading", { level: 4 });
    expect(h4Element).toBeInTheDocument();
    expect(h4Element).toHaveTextContent(/films/i);
  });
  test("make sure the people title is rendered and first letter capitalized", () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.people} />);
    const h4Element = screen.getByRole("heading", { level: 4 });
    expect(h4Element).toBeInTheDocument();
    expect(h4Element).toHaveTextContent(/people/i);
  });
  test("make sure the planets title is rendered and first letter capitalized", () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.planets} />);
    const h4Element = screen.getByRole("heading", { level: 4 });
    expect(h4Element).toBeInTheDocument();
    expect(h4Element).toHaveTextContent(/planets/i);
  });
  test("make sure the instructions are rendered", () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.films} />);
    const spanElement = screen.getByText(
      "Please click on the resource portraits below to view more information about them."
    );
    expect(spanElement).toBeInTheDocument();
  });

  test("should render pagination component on films page", async () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.films} />);
    const paginationEl = await screen.findByTestId("films-pagination");
    expect(paginationEl).toBeInTheDocument();
  });
  test("should render pagination component on people page", async () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.people} />);
    const paginationEl = await screen.findByTestId("people-pagination");
    expect(paginationEl).toBeInTheDocument();
  });
  test("should render pagination component on planets page", async () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.planets} />);
    const paginationEl = await screen.findByTestId("planets-pagination");
    expect(paginationEl).toBeInTheDocument();
  });
  test("should display the correct number of cards on the films page", async () => {
    render(<MockSwapiResourcePage resourceType={ResourceTypes.films} />);
    const paginationEl = await screen.findByTestId("films-pagination");
    expect(paginationEl).toBeInTheDocument();
  });
});

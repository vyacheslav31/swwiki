import ResourceTypes from "../../types/ResourceTypes";
import { render, screen } from "@testing-library/react";
import SwapiResourcePage from "../SwapiResourcePage";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { SwapiResourcePageProps } from "../SwapiResourcePage";


const MockSwapiResourcePage: React.FC<SwapiResourcePageProps> = ({ resourceType }) => {
    return <BrowserRouter>
        <SwapiResourcePage resourceType={resourceType} />
    </BrowserRouter>
}

describe("test the SwapiResourcePage component", () => {
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
});


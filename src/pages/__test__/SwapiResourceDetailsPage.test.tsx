import ResourceTypes from "../../types/ResourceTypes";
import { render, screen } from "@testing-library/react";
import SwapiResourceDetailsPage from "../SwapiResourceDetailsPage";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { SwapiResourceDetailsPageProps } from "../SwapiResourceDetailsPage";


const MockSwapiResourceDetailsPage: React.FC<SwapiResourceDetailsPageProps> = ({ resourceType }) => {
    return <BrowserRouter>
        <SwapiResourceDetailsPage resourceType={resourceType} />
    </BrowserRouter>
}

describe("test the SwapiResourcePage component", () => {
    test("should render person details page header", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const headerEl = screen.getByTestId(ResourceTypes.people + "-details-header");
        expect(headerEl).toBeInTheDocument();
    });

    test("should render films details page header", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const headerEl = screen.getByTestId(ResourceTypes.films + "-details-header");
        expect(headerEl).toBeInTheDocument();
    });

    test("should render planets details page header", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const headerEl = screen.getByTestId(ResourceTypes.planets + "-details-header");
        expect(headerEl).toBeInTheDocument();
    });

    /**
     * PEOPLE DETAILS TEST
     */
    test("should render name label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const nameElement = screen.getByText(/name/i);
        expect(nameElement).toBeInTheDocument();
    });
    test("should render birth year label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const yearElement = screen.getByText(/birth/i);
        expect(yearElement).toBeInTheDocument();
    });
    test("should render eye color label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const eyeColorElement = screen.getByText(/eye/i);
        expect(eyeColorElement).toBeInTheDocument();
    });
    test("should render gender label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const genderElement = screen.getByText(/gender/i);
        expect(genderElement).toBeInTheDocument();
    });
    test("should render hair color label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const hairElement = screen.getByText(/hair/i);
        expect(hairElement).toBeInTheDocument();
    });
    test("should render height label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const heightElement = screen.getByText(/height/i);
        expect(heightElement).toBeInTheDocument();
    });
    test("should render skin color label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const skinElement = screen.getByText(/skin/i);
        expect(skinElement).toBeInTheDocument();
    });
    test("should render homeworld label on people details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const homeworldElement = screen.getByText(/homeworld/i);
        expect(homeworldElement).toBeInTheDocument();
    });

    /**
    * FILMS DETAILS TEST
    */
    test("should render name label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const nameElement = screen.getByText(/name/i);
        expect(nameElement).toBeInTheDocument();
    });

    test("should render release date label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const releaseElement = screen.getByText(/release/i);
        expect(releaseElement).toBeInTheDocument();
    });

    test("should render director label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const directorElement = screen.getByText(/director/i);
        expect(directorElement).toBeInTheDocument();
    });

    test("should render producer label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const producerElement = screen.getByText(/producer/i);
        expect(producerElement).toBeInTheDocument();
    });

    test("should render episode number label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const episodeElement = screen.getByText(/episode/i);
        expect(episodeElement).toBeInTheDocument();
    });

    test("should render summary label on films details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const summaryElement = screen.getByText(/summary/i);
        expect(summaryElement).toBeInTheDocument();
    });

    /**
   * FILMS DETAILS TEST
   */

    test("should render name label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const nameElement = screen.getByText(/name/i);
        expect(nameElement).toBeInTheDocument();
    });

    test("should render surface label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const surfaceElement = screen.getByText(/surface/i);
        expect(surfaceElement).toBeInTheDocument();
    });

    test("should render orbital label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const orbitalElement = screen.getByText(/orbital/i);
        expect(orbitalElement).toBeInTheDocument();
    });

    test("should render diameter label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const diameterElement = screen.getByText(/diameter/i);
        expect(diameterElement).toBeInTheDocument();
    });

    test("should render gravity label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const gravityElement = screen.getByText(/gravity/i);
        expect(gravityElement).toBeInTheDocument();
    });

    test("should render terrain label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const terrainElement = screen.getByText(/terrain/i);
        expect(terrainElement).toBeInTheDocument();
    });

    test("should render climate label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const climateElement = screen.getByText(/climate/i);
        expect(climateElement).toBeInTheDocument();
    });

    test("should render population label on planet details", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const populationElement = screen.getByText(/population/i);
        expect(populationElement).toBeInTheDocument();
    });


    /**
     * Should render some kind of image on details page
     */

    test("should render a single image on the people details page", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.people} />);
        const personImage = screen.getByRole("img");
        expect(personImage).toBeInTheDocument();
        expect(personImage).toHaveAttribute("src");

    });
    test("should render a single image on the films details page", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.films} />);
        const filmImage = screen.getByRole("img");
        expect(filmImage).toBeInTheDocument();
        expect(filmImage).toHaveAttribute("src")
    });
    test("should render a single image on the planets details page", () => {
        render(<MockSwapiResourceDetailsPage resourceType={ResourceTypes.planets} />);
        const planetImage = screen.getByRole("img");
        expect(planetImage).toBeInTheDocument();
        expect(planetImage).toHaveAttribute("src")
    });



});


import SwapiResourceCard from "../SwapiResourceCard";
import { fireEvent, render, screen } from "@testing-library/react";
import { SwapiResourceCardProps } from "../SwapiResourceCard";
import { BrowserRouter } from "react-router-dom";

const mockResourceCardProps: SwapiResourceCardProps = {
  id: 1,
  name: "Luke Skywalker",
  resourceType: "people",
};

const MockSwapiResourceCard: React.FC<SwapiResourceCardProps> = ({
  id,
  name,
  resourceType,
}) => {
  return (
    <BrowserRouter>
      <SwapiResourceCard id={id} name={name} resourceType={resourceType} />
    </BrowserRouter>
  );
};

describe("test the SwapiResourceImage component", () => {
  test("should render a swapi resource card correctly", async () => {
    render(
      <MockSwapiResourceCard
        id={mockResourceCardProps.id}
        name={mockResourceCardProps.name}
        resourceType={mockResourceCardProps.resourceType}
      />
    );
  });

  test("should display the resource card title correctly", async () => {
    render(
      <MockSwapiResourceCard
        id={mockResourceCardProps.id}
        name={mockResourceCardProps.name}
        resourceType={mockResourceCardProps.resourceType}
      />
    );
    const title = await screen.findByText(/Luke Skywalker/i);
    expect(title).toBeTruthy();
  });
});

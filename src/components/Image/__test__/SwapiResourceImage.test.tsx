import SwapiResourceImage from "../SwapiResourceImage";
import { fireEvent, render, screen } from "@testing-library/react";
import { SwapiResourceImageProps } from "../SwapiResourceImage";

const mockValidImageProp: SwapiResourceImageProps = {
  id: 1,
  resourceName: "Luke Skywalker",
  resourceType: "characters",
};

const mockInvalidImageProp: SwapiResourceImageProps = {
  id: 888,
  resourceName: "BXAOSBNB",
  resourceType: "cars",
};

describe("test the SwapiResourceImage component", () => {
  test("should return a valid image when provided a valid url", async () => {
    render(
      <SwapiResourceImage
        id={mockValidImageProp.id}
        resourceName={mockValidImageProp.resourceName}
        resourceType={mockValidImageProp.resourceType}
      />
    );
    const imgElement = await screen.findByRole("img");
    fireEvent.load(imgElement);
    expect(imgElement).toHaveAttribute(
      "src",
      `https://starwars-visualguide.com/assets/img/${mockValidImageProp.resourceType}/${mockValidImageProp.id}.jpg`
    );
  });
  test("should return a fallback image when provided an invalid url", async () => {
    render(
      <SwapiResourceImage
        id={mockInvalidImageProp.id}
        resourceName={mockInvalidImageProp.resourceName}
        resourceType={mockInvalidImageProp.resourceType}
      />
    );
    const imgElement = await screen.findByRole("img");
    const imgFallback =
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    fireEvent.error(imgElement);
    expect(imgElement).toHaveAttribute("src", imgFallback);
  });
});

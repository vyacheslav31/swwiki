import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("tests the application as a whole", () => {
  test("should render without crashing, and be able to click on a resource card", async () => {
    render(<App />);
    // 1. Check if we are greeted by the home screen
    const titleElement = await screen.findAllByText(/home/i);

    await waitFor(() => {
      expect(titleElement as HTMLElement[]).toBeTruthy();
    });

    // 2. Get the resource cards
    const filmCard = await screen.findByTestId("films-clicktest");
    // 3. Click on a resource page
    fireEvent.click(filmCard);
  });
});

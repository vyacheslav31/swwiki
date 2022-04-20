import validatePageNumber from "../validatePageNumber";
import "@testing-library/jest-dom";

describe("tests the validatePageNumber function", () => {
  test("should uppercase the first letter of javascript", () => {
    const javascriptString = "javascript";
    const resultString = ucfirst(javascriptString);
    expect(resultString).toBe("Javascript");
  });
});

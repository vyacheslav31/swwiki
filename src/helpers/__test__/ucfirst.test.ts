import ucfirst from "../ucfirst";
import "@testing-library/jest-dom";

describe("tests the ucfirst function", () => {
  test("should uppercase the first letter of javascript", () => {
    const javascriptString = "javascript";
    const resultString = ucfirst(javascriptString);
    expect(resultString).toBe("Javascript");
  });
});

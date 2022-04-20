import { render } from "@testing-library/react";
import ValidateQueryParam, {
  ValidateQueryParamProps,
} from "../ValidateQueryParam";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ResourceTypes from "../../../types/ResourceTypes";

const MockValidateQueryParam: React.FC<ValidateQueryParamProps> = ({
  resourceType,
}) => {
  return (
    <BrowserRouter>
      <ValidateQueryParam resourceType={resourceType} />
    </BrowserRouter>
  );
};

describe("tests the routing the application", () => {
  test("should render the validate queryParam component", async () => {
    render(<MockValidateQueryParam resourceType={ResourceTypes.films} />);
  });
});

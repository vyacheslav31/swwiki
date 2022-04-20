import { render } from "@testing-library/react";
import ValidateQueryParam, { ValidateQueryParamProps } from "../ValidateQueryParam";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ResourceTypes from "../../../types/ResourceTypes";
import { createMemoryHistory } from "history";

const MockValidateQueryParam: React.FC<ValidateQueryParamProps> = ({ resourceType }) => {
    return <BrowserRouter>
        <ValidateQueryParam resourceType={resourceType} />
    </BrowserRouter>
};

describe("tests the routing the application", () => {
    // test("should render without crashing, and be able to click on a resource card", async () => {
    //     render(<MockValidateQueryParam resourceType={ResourceTypes.films} />);

    // });
});

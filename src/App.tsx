import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SwapiRequestProvider from "./state/SwapiRequest/context-provider";
import SwapiResourceDetailsPage from "./pages/SwapiResourceDetailsPage";
import RouterProvider from "./state/Router/context-provider";
import ValidateQueryParam from "./components/Validation/ValidateQueryParam";

const App = () => {
  return (
    <SwapiRequestProvider>
      <Router>
        <RouterProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="people"
                element={<ValidateQueryParam resourceType={"people"} />}
              />
              <Route
                path="people/:id"
                element={<SwapiResourceDetailsPage resourceType={"people"} />}
              />
              <Route
                path="films"
                element={<ValidateQueryParam resourceType={"films"} />}
              />
              <Route
                path="films/:id"
                element={<SwapiResourceDetailsPage resourceType={"films"} />}
              />
              <Route
                path="planets"
                element={<ValidateQueryParam resourceType={"planets"} />}
              />
              <Route
                path="planets/:id"
                element={<SwapiResourceDetailsPage resourceType={"planets"} />}
              />
              {/* <Route path="*" element={<Home />} /> */}
            </Route>
          </Routes>
        </RouterProvider>
      </Router>
    </SwapiRequestProvider>
  );
};

export default App;

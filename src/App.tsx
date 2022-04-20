import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SwapiRequestProvider from "./state/SwapiRequest/context-provider";
import SwapiResourceDetailsPage from "./pages/SwapiResourceDetailsPage";
import ValidateQueryParam from "./components/Validation/ValidateQueryParam";
import ResourceTypes from "./types/ResourceTypes";

/**
 * This is the main app component where all the routes are declared.
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @returns The </App> component.
 */

const App = () => {
  return (
    <SwapiRequestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="people"
              element={
                <ValidateQueryParam resourceType={ResourceTypes.people} />
              }
            />
            <Route
              path="people/:id"
              element={
                <SwapiResourceDetailsPage resourceType={ResourceTypes.people} />
              }
            />
            <Route
              path="films"
              element={
                <ValidateQueryParam resourceType={ResourceTypes.films} />
              }
            />
            <Route
              path="films/:id"
              element={
                <SwapiResourceDetailsPage resourceType={ResourceTypes.films} />
              }
            />
            <Route
              path="planets"
              element={
                <ValidateQueryParam resourceType={ResourceTypes.planets} />
              }
            />
            <Route
              path="planets/:id"
              element={
                <SwapiResourceDetailsPage
                  resourceType={ResourceTypes.planets}
                />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </SwapiRequestProvider>
  );
};

export default App;

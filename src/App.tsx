import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SwapiRequestProvider from "./state/SwapiRequest/context-provider";
import SwapiResourceDetailsPage from "./pages/SwapiResourceDetailsPage";
import RouterProvider from "./state/Router/context-provider";
import ValidateQueryParam from "./components/Validation/ValidateQueryParam";
import ResourceTypes from "./types/ResourceTypes";

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
                element={<ValidateQueryParam resourceType={ResourceTypes.people} />}
              />
              <Route
                path="people/:id"
                element={<SwapiResourceDetailsPage resourceType={ResourceTypes.people} />}
              />
              <Route
                path="films"
                element={<ValidateQueryParam resourceType={ResourceTypes.films} />}
              />
              <Route
                path="films/:id"
                element={<SwapiResourceDetailsPage resourceType={ResourceTypes.films} />}
              />
              <Route
                path="planets"
                element={<ValidateQueryParam resourceType={ResourceTypes.planets} />}
              />
              <Route
                path="planets/:id"
                element={<SwapiResourceDetailsPage resourceType={ResourceTypes.planets} />}
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

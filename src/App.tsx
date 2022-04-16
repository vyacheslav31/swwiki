import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SwapiRequestProvider from "./state/SwapiRequest/context-provider";
import SwapiResourcePage from "./pages/SwapiResourcePage";
import SwapiResourceDetailsPage from "./pages/SwapiResourceDetailsPage";
import RouterProvider from "./state/Router/context-provider";

const App = () => {
  return (
    <SwapiRequestProvider>
      <Router>
        <RouterProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="characters"
                element={<SwapiResourcePage resourceType={"people"} />}
              />
              <Route
                path="characters/:id"
                element={<SwapiResourceDetailsPage resourceType={"people"} />}
              />
              <Route
                path="films"
                element={<SwapiResourcePage resourceType={"films"} />}
              />
              <Route
                path="films/:id"
                element={<SwapiResourceDetailsPage resourceType={"films"} />}
              />
              <Route
                path="planets"
                element={<SwapiResourcePage resourceType={"planets"} />}
              />
              <Route
                path="planets/:id"
                element={<SwapiResourceDetailsPage resourceType={"planets"} />}
              />
            </Route>
          </Routes>
        </RouterProvider>
      </Router>
    </SwapiRequestProvider>
  );
};

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { SwapiRequestProvider } from "./state/SwapiRequest/context-provider";
import SwapiResourcePage from "./pages/SwapiResourcePage";
import SwapiResourceDetailsPage from "./pages/SwapiResourceDetailsPage";

const App = () => {
  return (
    <SwapiRequestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="characters" element={<SwapiResourcePage resourceType={"people"} />} />
            <Route path="characters/:id" element={<SwapiResourceDetailsPage />} />
            <Route path="films" element={<SwapiResourcePage resourceType={"films"} />} />
            <Route path="films/:id" element={<SwapiResourceDetailsPage />} />
            <Route path="planets" element={<SwapiResourcePage resourceType={"planets"} />} />
            <Route path="planets/:id" element={<SwapiResourceDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SwapiRequestProvider>
  );
};

export default App;

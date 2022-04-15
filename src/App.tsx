import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Films from "./pages/Films";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Planets from "./pages/Planets";
import { SwapiRequestProvider } from "./state/SwapiRequest/context-provider";

const App = () => {
  return (
    <SwapiRequestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="characters" element={<Characters />} />
            <Route path="films" element={<Films />} />
            <Route path="planets" element={<Planets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SwapiRequestProvider>
  );
};

export default App;

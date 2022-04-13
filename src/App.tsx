import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Films from "./pages/Films";
import Home from "./pages/Home";
import Layout from "antd/lib/layout/layout";
import Planets from "./pages/Planets";

export default function App() {
  return (
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
  );
}

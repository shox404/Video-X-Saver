import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Saver from "./Pages/Saver";

const routes = ["instagram", "youtube", "tiktok", "facebook"];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((route) => (
        <Route path={`/${route}`} element={<Saver name={route} />} />
      ))}
    </Routes>
  );
}

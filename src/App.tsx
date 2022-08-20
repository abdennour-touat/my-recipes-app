import React, { useState } from "react";
import Home from "./Screens/Home";
import "tailwindcss/tailwind.css";
import DisplayRecipes from "./components/DisplayRecipes";
import Recipe from "./Screens/Recipe";
import { initialDataState } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  // Create a client

  return (
    <BrowserRouter>
      <Routes>
        <Route path="search" element={<DisplayRecipes />} />
        <Route path="search/:id" element={<Recipe />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

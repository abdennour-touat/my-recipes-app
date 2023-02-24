import React, { useState } from "react";
import Home from "./Screens/Home";
import "tailwindcss/tailwind.css";
import Recipe from "./Screens/Recipe";
import Search from "./Screens/Search";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
const App = () => {
  // Create a client

  return (
    <HashRouter>
      <Routes>
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<Recipe />} />
        <Route index element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

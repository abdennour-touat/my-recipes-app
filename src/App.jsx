import React, { useState } from "react";
import Home from "./Screens/Home";
import "tailwindcss/tailwind.css";
import DisplayRecipes from "./components/DisplayRecipes";
import Recipe from './Screens/Recipe';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  initialDataState,
} from "./context";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const App = () => {
  // Create a client
  const queryClient = new QueryClient()

  const [state, setState] = useState(initialDataState);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="search" element={<DisplayRecipes />} />
          <Route path="search/:id" element={<Recipe />} />
          <Route index element={<Home />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>

    </BrowserRouter>
  );
};

export default App;
import React, { useState } from "react";
import Home from "./components/Home";
import "tailwindcss/tailwind.css";
import DisplayRecipes from "./components/DisplayRecipes";
import {
  initialDataState,
  DataContext,
  fetchData,
  FetchContext,
} from "./context";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [state, setState] = useState(initialDataState);

  return (
    <React.Fragment>
      <DataContext.Provider value={{ state, setState }}>
        <FetchContext.Provider value={fetchData}>
          <Switch>
            <Route path="/search">
              <DisplayRecipes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </FetchContext.Provider>
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default App;

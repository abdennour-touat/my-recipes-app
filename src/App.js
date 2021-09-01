import React, { useState } from "react";
import Home from "./components/Home";
import Context from './context'
import "tailwindcss/tailwind.css";
import DisplayRecipes from "./components/DisplayRecipes";

import { Switch, Route } from "react-router-dom";
const initialState = {
  recipes: [],
  query: "",
};
const App = () => {
  const [state, setState] = useState(initialState);
  return (
    <React.Fragment>
      {/* <Switch>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/search'>
          <DisplayRecipes/>
        </Route>
      </Switch>
      <Link to='/search'>test</Link> */}
      {/* <DisplayRecipes/> */}
      <Context.Provider value={{state, setState}}>
      <Switch>
        <Route path="/search">
          <DisplayRecipes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      </Context.Provider>
    </React.Fragment>
  );
};

export default App;

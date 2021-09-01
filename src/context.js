import { createContext } from "react";

const initialState = {
  recipes: [],
  query: "",
};

const Context = createContext(initialState);
export default Context;

import { createContext } from "react";

export async function fetchData(query) {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=c0036659&app_key=a80a017565807050d26872ce0c66ca99`
  );
  const data = await response.json();
  return data.hits;
}


export const initialDataState = {
  recipes: [],
  query: ""
};

export const FetchContext = createContext(fetchData)
export const DataContext = createContext(initialDataState);

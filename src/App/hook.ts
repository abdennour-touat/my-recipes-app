import axios from "axios";
import { create } from "zustand";
interface Recipe {
  id: string;
  title: string;
  image: string;
  imageType: string;
}

export interface RecipeState {
  data: Recipe[];
  isloading: boolean;
  query: String;
  searchRecipe: (query: String) => void;
  getRecipeCard: (id: number) => void;
}

const config = {
  headers: { "x-api-key": "d7d55a1822d040c39c0e3b6af8c1b38a" },
};
const apikey = "d7d55a1822d040c39c0e3b6af8c1b38a";
export const useStore = create<RecipeState>((set) => ({
  query: "",
  data: [],
  isloading: true,
  searchRecipe: async (q: String) => {
    set(() => ({ query: q }));
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${q}&apiKey=${apikey}`
      // `https://api.spoonacular.com/recipes/3/information?apiKey=${apikey}`
      // `https://api.spoonacular.com/search?q=${query}&apiKey=${apikey}`
    );
    const data = response.data.results;

    set(() => ({ data, isloading: false }));
  },
  getRecipeCard: async (id: number) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/card?apiKey=${apikey}`
      // config
    );
    console.log(response.data);
  },
}));

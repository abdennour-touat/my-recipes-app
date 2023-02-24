import type { RootState, AppDispatch } from "./store";
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
  getRecipe: () => void;
}

export const useStore = create<RecipeState>((set) => ({
  data: [],
  getRecipe: async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/3/information?apiKey=d7d55a1822d040c39c0e3b6af8c1b38a`
    );
    console.log(response);
  },
}));

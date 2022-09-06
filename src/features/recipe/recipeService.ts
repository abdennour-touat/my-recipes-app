import axios from "axios";
import chalk from "chalk";
export const searchRecipe = async (query: string, number: number) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=d7d55a1822d040c39c0e3b6af8c1b38a&query=${query}&maxFat=25&number=${number}`
  );
  // console.log(chalk.cyan("Response from the api"));
  return response.data.results;
};

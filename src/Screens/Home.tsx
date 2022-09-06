import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../App/hook";
import { getRecipes, setRecipeName } from "../features/recipe/recipeSlice";

export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  // Access the client
  const navigation = useNavigate();
  const handleSearch = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(setRecipeName(input));
    dispatch(getRecipes({ recipeName: input, recipesNumber: 5 }));
    navigation("search");
  };

  return (
    <div className=" flex-col-reverse justify-center text-center w-screen h-screen  pt-14 bg-red-50">
      <h1 className="font-title text-5xl text-gray-800 md:text-8xl mx-2 mb-4">
        Welcome to my Recipes app!
      </h1>

      <img
        className="w-1/2 h-1/2 m-auto opacity-80 mb-4 md:w-1/4"
        src="https://www.svgrepo.com/show/89274/food.svg"
        alt="img"
      />

      <form className="flex flex-wrap  justify-center bg-red-50  rounded-md w-96 m-auto items-stretch  ">
        <input
          className="  py-4 w-96 px-8 appearance-none  border rounded-xl text-xl  text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 "
          placeholder="Search for a Recipe..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button
          type="submit"
          onClick={(e) => handleSearch(e)}
          className="  px-10  h-16 text-xl mt-8 md:text-2xl  bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white font-bold font-mono rounded-xl "
          title="Search for a recipe"
        >
          Find Recipe
        </button>
      </form>
    </div>
  );
}

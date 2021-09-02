import React, { useEffect } from "react";
import { useParams } from "react-router";
import RecipeNavBar from "../components/RecipeNavBar";
import { DataContext } from "../context";
import { useContext } from "react";
import SideArticle from "../components/SideArticle";
import MainArticle from "../components/MainArticle";

export default function Recipe(props) {
  const Storage = window.localStorage;
  const { state } = useContext(DataContext);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(state)

  if (state.query === '') {

    state.query = 'random'
    const obj = {recipe: JSON.parse(Storage.getItem('recipe'))}
    state.recipes = [obj]
  }

  const { id } = useParams();

  const { recipes } = state;

  const { recipe } = recipes.find((element) => element.recipe.label === id);

  Storage.setItem('recipe', JSON.stringify(recipe))
  


  return (
    <div className="bg-gray-100 ">
      <RecipeNavBar />
      <div className="flex flex-wrap  ">
        <SideArticle
          img={recipe.image}
          cautions={recipe.cautions}
          calories={recipe.calories}
          dietLabels={recipe.dietLabels}
          dishType={recipe.dishType}
          healthLabels={recipe.healthLabels}
          label={recipe.label}
          cuisineType={recipe.cuisineType}
        />
        <MainArticle ingredients={recipe.ingredients} />
      </div>
    </div>
  );
}

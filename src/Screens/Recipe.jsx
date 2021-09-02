import React, { useEffect } from "react";
import { useParams } from "react-router";
import RecipeNavBar from "../components/RecipeNavBar";
import { DataContext } from "../context";
import { useContext } from "react";
import SideArticle from "../components/SideArticle";
import MainArticle from "../components/MainArticle";
import { useHistory, useLocation } from "react-router-dom";

function Recipe(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location.state)

  const Storage = window.localStorage;
  const { state } = useContext(DataContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state.query === "") {
    console.log(JSON.parse(Storage.getItem("recipe")));
    if (!location.state) {
      history.push("/");
      console.log("empty");
      return null;
    } else {
      const obj = { recipe: JSON.parse(Storage.getItem("recipe")) };
      console.log(obj);
      state.recipes = [obj];
      console.log(state);
    }
  }
  const { recipes } = state;

  const { recipe } = recipes.find((element) => {
    return element.recipe.label === id;
  });



  Storage.setItem("recipe", JSON.stringify(recipe));

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
export default React.memo(Recipe);

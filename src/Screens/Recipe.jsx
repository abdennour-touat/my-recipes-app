import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RecipeNavBar from "../components/RecipeNavBar";
import SideArticle from "../components/SideArticle";
import MainArticle from "../components/MainArticle";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Recipe = () => {
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const query = useQuery("recipeName");
  console.log(query)


  return (
    <div>hello</div>
    // <div className="bg-gray-100 ">
    //   <RecipeNavBar />
    //   <div className="flex flex-wrap ">
    //     <SideArticle
    //       img={recipe?.image}
    //       cautions={recipe?.cautions}
    //       calories={recipe?.calories}
    //       dietLabels={recipe?.dietLabels}
    //       dishType={recipe?.dishType}
    //       healthLabels={recipe?.healthLabels}
    //       label={recipe?.label}
    //       cuisineType={recipe?.cuisineType}
    //     />
    //     <MainArticle ingredients={recipe?.ingredients} />
    //   </div>
    // </div>
  );
};
export default Recipe;

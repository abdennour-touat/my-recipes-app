import React from "react";
import IngredientCard from "./IngredientCard";

export default function MainArticle({ ingredients }) {
  return (
    <div className=" mt-28 w-screen">
      {ingredients.map((ig, index) => (
        <IngredientCard key={index} ingredient={ig} />
      ))}
    </div>
  );
}

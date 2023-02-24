import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
// import { useAppDispatch, useAppSelector } from "../App/hook";
// import { getRecipes, setRecipeName } from "../features/recipe/recipeSlice";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  // const dispatch = useAppDispatch();
  // const { data, status } = useAppSelector((state) => state.recipes);

  useEffect(() => {
    // if (!data.recipeName) {
    // navigate("/");
    // }
  }, []);

  if (status === "rejected") {
    return (
      <>
        <NavBar
          search={search}
          onUpdateSearch={(e: {
            target: { value: React.SetStateAction<string> };
          }) => {
            setSearch(e.target.value);
          }}
          onGetSearch={(e: { preventDefault: () => void }) => {
            e.preventDefault();
            // dispatch(setRecipeName(search));
            // dispatch(getRecipes({ recipeName: search, recipesNumber: 5 }));
            setSearch("");
          }}
        />
        <div className="text-center mt-6">
          <h1 className="text-xl"> An error occured</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar
        search={search}
        onUpdateSearch={(e: {
          preventDefault: () => void;
          target: { value: React.SetStateAction<string> };
        }) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
        onGetSearch={(e: { preventDefault: () => void }) => {
          e.preventDefault();
          // dispatch(setRecipeName(search));
          // dispatch(getRecipes({ recipeName: search, recipesNumber: 5 }));
          setSearch("");
        }}
      />

      {status === "pending" ? (
        <div className="flex justify-center pt-28">
          <Circles color="#4ADE80" height={100} width={100} />
        </div>
      ) : (
        <div className=" flex flex-wrap px-8 justify-around  font-sans mt-24 md:mt-8 ">
          {/* {data.recipes.map((r, index) => (
            <Card key={index} {...r}></Card> */}
          {/* ))} */}
        </div>
      )}
    </>
  );
}

export default Search;

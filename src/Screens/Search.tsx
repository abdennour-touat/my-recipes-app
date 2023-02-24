import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, Suspense } from "react";
import { Circles } from "react-loader-spinner";
import { useStore } from "../App/hook";
import { stat } from "fs";
// import { useAppDispatch, useAppSelector } from "../App/hook";
// import { getRecipes, setRecipeName } from "../features/recipe/recipeSlice";
function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  // const dispatch = useAppDispatch();
  // const { data, status } = useAppSelector((state) => state.recipes);
  const { data, isloading, query } = useStore((state) => state);

  useEffect(() => {
    console.log(query);

    if (!query) {
      navigate("/");
    }
  }, []);

  if (isloading) {
    return (
      <div className="flex justify-center pt-28">
        <Circles color="#4ADE80" height={100} width={100} />
      </div>
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
          setSearch("");
        }}
      />

      <div className=" flex flex-wrap px-8 justify-around  font-sans mt-24 md:mt-8 ">
        {data.map((r, index) => (
          <Card key={index} {...r} />
        ))}
      </div>
    </>
  );
}

export default Search;

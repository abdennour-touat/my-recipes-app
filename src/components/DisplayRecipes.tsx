import Card from "./Card";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchData } from "../context";
import { Circles } from "react-loader-spinner";
function DisplayRecipes(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [recipeName, setRecipeName] = useState();

  // useEffect(() => {

  //   if (!rcpName) {
  //     navigate("/");
  //   } else {
  //     setRecipeName(rcpName)
  //   }
  // }, [recipeName]);

  if (isLoading) {
    return (
      <>
        <NavBar
          search={search}
          onUpdateSearch={(e) => {
            setSearch(e.target.value);
          }}
          onGetSearch={(e) => {
            e.preventDefault();
            setRecipeName(search);
            queryClient.setQueryData(["recipeName"], (prev) => {
              return search;
            });
            setSearch("");
          }}
        />
        <div className="flex justify-center pt-28">
          <Circles
            className="justify-center"
            color="#4ADE80"
            height={100}
            width={100}
          />
        </div>
      </>
    );
  }
  if (isSuccess) {
    return (
      <>
        <NavBar
          search={search}
          onUpdateSearch={(e) => {
            setSearch(e.target.value);
          }}
          onGetSearch={(e) => {
            e.preventDefault();
            setRecipeName(search);
            queryClient.setQueryData(["recipeName"], (prev) => {
              return search;
            });
            setSearch("");
          }}
        />

        <div className=" flex flex-wrap px-8 justify-around  font-sans mt-24 md:mt-8 ">
          {data.map((r, index) => (
            <Card key={index} card={r.recipe}></Card>
          ))}
        </div>
      </>
    );
  }
}

export default DisplayRecipes;

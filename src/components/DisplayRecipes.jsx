import Card from "./Card";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../context";
function DisplayRecipes(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [recipeName, setRecipeName] = useState();
  const queryClient = useQueryClient();


  const rcpName = queryClient.getQueryData(["recipeName"])
  useEffect(() => {

    if (!rcpName) {
      navigate("/");
    } else {
      setRecipeName(rcpName)
    }
  }, [recipeName]);

  const { isLoading, isSuccess, data } = useQuery(["recipes", recipeName], () => fetchData(recipeName));
  if (isLoading) {
    return (
      <>
        <NavBar
          search={search}
          onUpdateSearch={(e) => {
            setSearch(e.target.value);
          }}
          onGetSearch={(e) => {
            e.preventDefault()
            setRecipeName(search)
            queryClient.setQueryData(["recipeName"], prev => {
              return search
            })
            setSearch('');
          }}
        />
        <div className="flex justify-center pt-28">
          <Circles className="justify-center" color="#4ADE80" height={100} width={100} />
        </div>

      </>)

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
            e.preventDefault()
            setRecipeName(search)
            queryClient.setQueryData(["recipeName"], prev => {
              return search
            })
            setSearch('');
          }}
        />

        <div className=" flex flex-wrap  justify-center bg-gray-100 font-sans   pt-44 md:pt-48 ">
          {data.map((r, index) => (
            <Card key={index} card={r.recipe}></Card>
          ))}
        </div>
      </>
    );
  }
}
import { Circles } from "react-loader-spinner";

export default DisplayRecipes;

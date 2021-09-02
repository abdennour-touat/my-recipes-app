import Card from "./Card";
import NavBar from "./NavBar";
import { DataContext, FetchContext } from "../context";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

function DisplayRecipes(props) {
  const dataContext = useContext(DataContext);
  const fetchRecipes = useContext(FetchContext);
  const history = useHistory();
  const { state, setState } = dataContext;
  const [search, setSearch] = useState("");
  
  if ( state.query === "") {
    history.push("/");
  }
  useEffect(() => {
    
    fetchRecipes(state.query).then((data) => {
      setState({ ...state, recipes: data });
    });

   
    
  }, [state.query]);


  return (
    <>
      <NavBar
        search={search}
        onUpdateSearch={(e) => {
          setSearch(e.target.value);
        }}
        onGetSearch={(e)=>{
          e.preventDefault()
          setState({...state, query: search})
          setSearch('');
        }
        }
      />
      <div className=" flex flex-wrap  justify-center bg-gray-100 font-sans   pt-44 md:pt-48 ">
        {state.recipes.map((r, index) => (
          <Card key={index} card={r.recipe}></Card>
        ))}
      </div>
    </>
  );
}

export default DisplayRecipes;

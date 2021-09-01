import Card from "./card";
import NavBar from "./NavBar";
import Context from '../context';
 
import React, {useState, useEffect, useContext} from 'react'

export default function DisplayRecipes(props) {
    const context = useContext(Context);
  const appId = "c0036659";
  const appKey = "a80a017565807050d26872ce0c66ca99";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    }
    fetchData();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

    return (
        <>
        <NavBar
        search={search}
        onUpdateSearch={updateSearch}
        onGetSearch={getSearch}
      />
      <div className=" flex flex-wrap  justify-center bg-gray-100 font-sans  pt-44">
        {recipes.map((r, index) => (
          <Card key={index} card={r.recipe}></Card>
        ))}
      </div>
        </>
    )
}

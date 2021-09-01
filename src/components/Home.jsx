import React, { useContext } from "react";
import { Link} from "react-router-dom";
import Context from '../context';


export default function Home() {
    const {state, setState} = useContext(Context);
   

  return (
    <div className=" text-center w-screen h-screen pt-28 bg-red-50">
      <h1 className="font-title text-8xl text-gray-800 ">
        Welcome to my Recipes app!
      </h1>
      <img
        className="w-1/6 h-1/2 m-auto opacity-80"
        src="https://www.svgrepo.com/show/89274/food.svg"
        alt="img"
      />
      <Link
        to={{
          pathname: "/search",
          state: {
            fromNotifications: true,
          },
        }}
      >
        <button
          className=" w-auto px-6 h-16 text-2xl  mt-14  bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white font-bold font-mono rounded-xl "
          onClick={()=> setState({ recipes: ['one'],
          query: "test",})}
          title="Search for a recipe"
        >
          Find Recipe
        </button>
      </Link>
    </div>
  );
}

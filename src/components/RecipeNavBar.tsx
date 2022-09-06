import React from "react";
import { Link } from "react-router-dom";

export default function RecipeNavBar() {
  return (
    <>
      <nav className=" py-2 w-full text-center shadow px-2 bg-red-50  md:justify-between ">
        <Link to="/">
          <h1 className="text-5xl py-1 text-gray-900 truncate   font-title pl-3 ">
            My recipes App
          </h1>
        </Link>
      </nav>
      
    </>
  );
}

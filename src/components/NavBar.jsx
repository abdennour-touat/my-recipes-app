import React from "react";


export default function NavBar(props) {
  const { onGetSearch, onUpdateSearch, search } = props;
  return (
    <>
      <nav className="  flex justify-between  w-full shadow mx-auto px-4 bg-red-50 items-center fixed z-50">
        <h1 className="text-5xl text-gray-900  w-screen font-title pl-3">
          My recipes App
        </h1>
          
        <form
          onSubmit={onGetSearch}
          className="bg-red-50  rounded-md px-8 pt-3 pb-3 w-full mb-1 flex"
        >
          <input
            className="appearance-none border rounded w-full py-3 text-xl px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-50"
            placeholder='Search for a recipe'
            value={search}
            onChange={onUpdateSearch}
          ></input>
          <button
            type="submit"
            className=" bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white text-xl font-extrabold px-4 rounded-xl ml-4 "
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

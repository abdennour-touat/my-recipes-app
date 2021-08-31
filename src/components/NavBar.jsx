import React from "react";

export default function NavBar(props) {
  const { onGetSearch, onUpdateSearch, search } = props;
  return (
    <>
      <nav className="  flex justify-between border-b-2 w-full mx-auto px-4 bg-gray-50 items-center">
        <h1 className="font-normal text-gray-900  text-3xl w-screen font-sans">
          My recipes App
        </h1>
          
        <form
          onSubmit={onGetSearch}
          className="bg-gray-50  rounded-md px-8 pt-3 pb-3 w-full mb-1 flex"
        >
          <input
            className="appearance-none border rounded w-full py-3 text-lg px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            placeholder='Search for a recipe'
            value={search}
            onChange={onUpdateSearch}
          ></input>
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded ml-4 "
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

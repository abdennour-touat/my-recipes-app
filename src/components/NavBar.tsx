
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

import Button from "@material-tailwind/react";

export default function NavBar(props) {
  const { onGetSearch, onUpdateSearch, search } = props;




  return (
    <>
      <header className=" flex py-2 w-full items-center shadow px-2 bg-red-50  sticky z-50   justify-center md:justify-between">
        <Link to="/">
          <h1 className="text-5xl py-1 text-gray-900 truncate   font-title pl-3 ">
            My recipes App
          </h1>
        </Link>

        <form
          onSubmit={onGetSearch}
          className="invisible bg-red-50 w-6/12  rounded-md px-8 pt-3 pb-3  md:flex md:visible hidden "
        >
          <input
            className="invisible appearance-none flex-grow border rounded py-2 text-xl px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 md:visible"
            placeholder="Search for a recipe"
            value={search}
            onChange={onUpdateSearch}
          ></input>
          <button
            type="submit"
            color="black"
            className="invisible bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white text-xl font-extrabold px-4 rounded-xl ml-4 md:visible"
          >
            Search
          </button>
        </form>
      </header>
      <form
        onSubmit={onGetSearch}
        className=" visible md:invisible  bg-gray-100 inline-flex rounded-lg   md:flex   absolute top-24 inset-x-0 mx-11   "
      >
        <input
          className=" appearance-none flex-grow border rounded-lg  py-2 text-xl px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 "
          placeholder="Search for a recipe"
          value={search}
          onChange={onUpdateSearch}
        ></input>
        <button
          type="submit"
          color="black"
          className="bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white text-xl font-extrabold  rounded-xl ml-4 p-1 px-2"
        >
          <SearchIcon fontSize="large" className="p-0 " />
        </button>
      </form>
    </>
  );
}

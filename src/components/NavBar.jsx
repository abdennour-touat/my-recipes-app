import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Context from "../context";

export default function NavBar(props) {
  const { onGetSearch, onUpdateSearch, search } = props;
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const context = useContext(Context);

  const { state, setState } = context;

  const validate = () => {
    setState({ ...state, query: input });
    setInput("");
    setShowModal(false);
  };

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Search for a Recipe..."
          onKeyDown={(e) => e.key === "Enter" && validate()}
        />
        {input}
      </ModalBody>
      <ModalFooter>
        <Button
          color="pink"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="pink"
          onClick={() => {
            setState({ ...state, query: input });
            setShowModal(false);
            setInput("");
          }}
          ripple="light"
        >
          Search
        </Button>
      </ModalFooter>
    </Modal>
  );
  
  return (
    <>
      {modal}
      <nav className=" flex py-2 w-full justify-between items-center shadow px-2 bg-red-50  fixed z-50 md:justify-between ">
        <Link to="/">
          <h1 className="text-5xl py-1 text-gray-900 truncate   font-title pl-3 ">
            My recipes App
          </h1>
        </Link>
        <Button className="text-black" onClick={() => setShowModal(true)}>
          <SearchIcon fontSize="large" className="visible md:invisible mr-6" />
        </Button>

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
            className="invisible bg-green-400 hover:bg-green-500 hover:scale-105 transform duration-500 text-white text-xl font-extrabold px-4 rounded-xl ml-4 md:visible"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

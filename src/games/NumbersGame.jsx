import React from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/index";

const NumbersGame = () => {
  const navigate = useNavigate();

  const btnHandler = () => {
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        className="m-2 p-2 rounded-xl bg-gray-700 text-slate-300 hover:bg-gray-500 hover:text-slate-100 hover:text-lg font-karla font-semibold"
        onClick={btnHandler}
      >
        Home
      </button>
      <Main />
    </>
  );
};

export default NumbersGame;

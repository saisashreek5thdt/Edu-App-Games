import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const cardHandler = () => {
    navigate('/game/words/');
  };

  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={cardHandler}>
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src="https://picsum.photos/600/400/?random"
        />

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg no-underline text-black">
            Words Scramble
          </h1>
          <p className="text-teal-700 font-semibold text-sm">Play Now</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div className="flex items-center no-underline text-black">
            <p className="text-lg">Age: 6 - 10</p>
          </div>
          <div className="no-underline text-teal-700 hover:text-red-dark">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Cards;

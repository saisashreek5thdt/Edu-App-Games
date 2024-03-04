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
          <h1 className="text-lg no-underline hover:underline text-black">
            Article Title
          </h1>
          <p className="text-grey-darker text-sm">11/1/19</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div className="flex items-center no-underline hover:underline text-black">
            <img
              alt="Placeholder"
              className="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            />
            <p className="ml-2 text-sm">Author Name</p>
          </div>
          <div className="no-underline text-grey-darker hover:text-red-dark">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Cards;

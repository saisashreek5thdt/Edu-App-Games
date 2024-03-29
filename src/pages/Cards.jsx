/* eslint-disable react/prop-types */
import React from "react";

const Cards = ({ imgSrc, title, desc, onClick }) => {
  return (
    <>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
          onClick={onClick}
        >
          <img alt="Placeholder" className="block h-auto w-full" src={imgSrc} />

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg font-semibold no-underline text-black">{title}</h1>
            <p className="text-teal-700 font-semibold text-sm">Play Now</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <div className="flex items-center no-underline text-black">
              <p className="text-lg">{desc}</p>
            </div>
            <div className="no-underline text-teal-700 hover:text-red-dark">
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default Cards;

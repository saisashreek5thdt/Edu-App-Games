import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <>
      <div className="container my-4 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

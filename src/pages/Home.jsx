import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const navigate = useNavigate();

  const cardHandler = () => {
    navigate("/game/words/");
  };

  return (
    <>
      <div className="container my-4 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Cards
              imgSrc={`https://picsum.photos/600/400/?random`}
              title={`Words Scramble`}
              desc={`Age: 6 - 10`}
              onClick={cardHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

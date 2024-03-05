import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const navigate = useNavigate();

  const wordScrambleHandler = () => {
    navigate("/game/words/");
  };

  const numberGameHandler = () => {
    navigate("/game/numbers/");
  };

  return (
    <>
      <div className="container my-4 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <Cards
            imgSrc={`https://picsum.photos/600/400/?random`}
            title={`Words Scramble`}
            desc={`Age: 6 - 10`}
            onClick={wordScrambleHandler}
          />
          <Cards
            imgSrc={`https://picsum.photos/600/400/?random`}
            title={`Numbers Game`}
            desc={`Age: 6 - 10`}
            onClick={numberGameHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

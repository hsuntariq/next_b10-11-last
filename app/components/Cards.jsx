import React from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  return (
    <>
      <div className="flex justify-between w-full mx-auto gap-4">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </>
  );
};

export default Cards;

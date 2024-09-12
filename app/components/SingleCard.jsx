import React from "react";
import { FaUser } from "react-icons/fa";

const SingleCard = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-4 bg-[#192237] rounded-xl text-white w-full">
        <div className="flex gap-4 items-center">
          <FaUser />
          <p className="text-gray-400 font-semibold">Total users</p>
        </div>
        <h5 className="font-bold text-2xl">10,430</h5>
      </div>
    </>
  );
};

export default SingleCard;

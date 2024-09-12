import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Tables from "../components/Tables";
import Charts from "../components/Chart";
import Ads from "../components/Ads";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row  mx-auto w-[90%]">
        <div className="w-full">
          <Cards />
          <Tables />
          <Charts />
        </div>
        <div className="ads w-1/4">
          <Ads />
        </div>
      </div>
    </>
  );
};

export default page;

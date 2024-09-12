"use client";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center self-start w-full mx-auto bg-[#192237] p-5 lg:w-[90%] my-5 rounded-xl">
        <h2 className="text-3xl text-white">Dashboard</h2>
        <div className="flex gap-3 items-center text-white">
          <SearchBar />
          <FaGlobe />
          <FaBell />
          <IoChatboxSharp />
        </div>
      </div>
    </>
  );
};

export default Navbar;

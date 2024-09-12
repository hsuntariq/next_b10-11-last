"use client";
import React, { useRef } from "react";
import { FaList, FaUser } from "react-icons/fa";
import { sidebarData } from "../data/data";
import Link from "next/link";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("myUser"));
  const sidebar = useRef();
  const handleToggle = () => {
    sidebar.current.classList.toggle("hidden");
  };
  return (
    <>
      <div
        ref={sidebar}
        className="w-full  items-center justify-between  md:w-[30%] lg:w-[20%] p-8 bg-[#192237] min-h-screen hidden sm:block"
      >
        <div className="flex justify-between gap-4 items-center">
          <div className="flex  items-center gap-4">
            <div className="flex text-white justify-center  bg-gray-600 items-center p-5 rounded-full">
              <FaUser />
            </div>
            <div className="flex flex-col text-white">
              <h6 className="font-bold">{user?.username}</h6>
              <p className="text-gray-500">Admin</p>
            </div>
          </div>
        </div>
        <ul className="unstyled flex flex-col my-5 gap-5">
          {sidebarData?.map((item, index) => {
            return (
              <li
                key={index}
                className="text-gray-500 font-bold text-1xl uppercase"
              >
                {item?.name}
                <ul className="unstyled flex ms-5 my-4 flex-col gap-3">
                  {item?.content?.map((list, i) => {
                    return (
                      <Link
                        href={list?.link}
                        key={i}
                        className="flex items-center gap-3 p-2 hover:bg-[#151C2D] transition-all rounded-full px-4 cursor-pointer font-semibold text-white"
                      >
                        {" "}
                        {list?.icon} {list?.name}
                      </Link>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <FaList
        onClick={handleToggle}
        className="text-white  absolute  top-2 right-8 block md:hidden"
        size={30}
      />
    </>
  );
};

export default Sidebar;

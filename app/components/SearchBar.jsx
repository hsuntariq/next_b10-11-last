"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchBar = () => {
  // get the current path
  const path = usePathname();
  // get the query Object
  const searchObject = useSearchParams();
  //   convert it into strinh
  const params = new URLSearchParams(searchObject);

  // replace current url
  const { replace } = useRouter();

  const handleChange = (e) => {
    if (e.target.value == "") {
      params.delete("q");
    } else {
      params.set("q", e.target.value);
    }
    replace(`${path}?${params}`);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="bg-gray-700 rounded-sm p-2 outline-none"
      onChange={handleChange}
    />
  );
};

export default SearchBar;

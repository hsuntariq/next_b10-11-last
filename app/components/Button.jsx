"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { CircleLoader } from "react-spinners";
const Button = ({ content, color, loader, loadingColor }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        disabled={pending}
        className={`w-full outline-none p-2  my-2 ${color} rounded-md  ${
          pending && loadingColor
        } `}
      >
        {pending ? <CircleLoader size={20} color="white" /> : content}
      </button>
    </>
  );
};

export default Button;

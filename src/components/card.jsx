import React from "react";
import logo from "../assets/images/logo.png";

const card = () => {
  return (
    <div className=" w-3xs shadow-lg rounded mt-5">
      <img
        src={logo}
        alt="Logo"
        className="w-full h-50 bg-amber-500 object-cover rounded"
      />
      <h1 className=" text-[#2E014F] font-bold text-3xl pt-5 px-5">Title</h1>
      <p className=" text-[#4D4848] p-5">
        discrubtion This is a simple card component built with React and
        Tailwind CSS.
      </p>
    </div>
  );
};

export default card;

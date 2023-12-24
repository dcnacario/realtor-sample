import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 
    rounded-md uppercase text-sm font-medium shadow-md hover:bg-red-800 active:bg-red-900
     transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg"
    >
      Continue with Google{" "}
      <FcGoogle className="mx-2 text-2xl bg-white rounded-full mr-2" />
    </button>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Start = ({ totalQuestions, dispatch }) => {
  return (
    <div className="w-9/12 mx-auto flex flex-col gap-y-10 justify-center items-center text-white">
      <h1 className="text-4xl font-bold">Welcome to React Quiz.</h1>
      <h3 className="text-4xl font-semibold">
        Solve {totalQuestions} questions & Test your react skills. ✅
      </h3>
      <button
        className="bg-slate-500 text-slate-100 hover:bg-slate-300 hover:text-black text-xl rounded-full w-1/6 py-5"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s Start
      </button>
    </div>
  );
};

export default Start;

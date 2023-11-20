/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NextQuestion = ({ answer, dispatch, totalQuestions, index }) => {
  if (answer === null) return null;
  if (index < totalQuestions - 1)
    return (
      <button
        className="bg-slate-500 text-slate-100 hover:bg-slate-300 hover:text-black text-xl rounded-full w-1/12 py-2"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === totalQuestions - 1)
    return (
      <button
        className="bg-slate-500 text-slate-100 hover:bg-slate-300 hover:text-black text-xl rounded-full w-1/12 py-2"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};

export default NextQuestion;

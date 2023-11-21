/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Question = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  // const answerColor = hasAnswered
  //   ? index === question.correctOption
  //     ? "bg-blue-600"
  //     : "bg-orange-500"
  //   : "";
  return (
    <div className="w-9/12 mx-auto flex justify-center items-center text-white flex-col">
      <h3 className="text-3xl my-5">{question.question}</h3>
      <div className="w-1/2 mx-auto">
        {question.options.map((option, index) => (
          <button
            key={option}
            className={`w-full bg-slate-400 text-black my-3 py-3 px-5 rounded-full ${
              hasAnswered
                ? ""
                : "hover:bg-slate-800 hover:text-white cursor-pointer hover:ms-5"
            }  ${index === answer ? "ms-5" : ""}`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
            style={
              hasAnswered
                ? index === question.correctOption
                  ? { backgroundColor: "#4169E1" }
                  : { backgroundColor: "#FF7518" }
                : {}
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Progress = ({ totalQuestions, index, points, totalPoints }) => {
  return (
    <header className="w-full flex flex-col items-center">
      <progress className="w-1/2 mb-10" max={totalQuestions} value={index} />
      <div className="w-9/12 mx-auto flex justify-around items-center text-white text-lg">
        <p>
          Questions: <strong>{index}</strong>/ {totalQuestions}
        </p>
        <p>
          Points: <strong>{points}</strong>/ {totalPoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;

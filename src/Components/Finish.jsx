/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Finish = ({ points, totalPoints, dispatch, highscore }) => {
  const percentage = (points / totalPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "💯";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🤨";
  if (percentage >= 0 && percentage < 50) emoji = "🙃";
  if (percentage === 100) emoji = "🤦🏻‍♂️";

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <div className="w-9/12 py-5 rounded-full text-center bg-blue-500 text-white text-xl">
        <p>
          <span>{emoji}</span> You have scored {points} out of {totalPoints}. (
          {Math.round(percentage)}%)
        </p>
        <p>Your Highscore: {highscore}</p>
      </div>
      <button
        className="w-1/12 py-2 bg-slate-500 text-slate-100 hover:bg-slate-300 hover:text-black text-xl rounded-full "
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Finish;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const Timer = ({ totalTime, dispatch }) => {
  const mins = Math.floor(totalTime / 60);
  const secs = totalTime % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="bg-slate-500 text-slate-100 hover:bg-slate-300 hover:text-black text-xl rounded-full text-center w-1/12 py-2">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;

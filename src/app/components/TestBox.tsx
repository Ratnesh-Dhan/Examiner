"use client";
// https://dribbble.com/shots/23227125-Quiz-MCQ-Exam-interface-design
// This is link to the design
import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

const TestBox = () => {
  const [total] = useState(10);
  const [current] = useState(4);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((current/total)*100)
  }, [current, total]);

  return (
    <div className="md:m-20 m-5 border rounded-lg border-slate-200">
      <div className="flex justify-between md:p-10 p-5">
        <div className="text-xl md:text-3xl">Timer</div>
        <button className="text-xl md:text-3xl bg-[#50d71e]">Submit</button>
      </div>
      <div id="question-progress" className="flex md:flex-row flex-col-reverse items-center">
        <div>This is left</div>
        <div>
          <div className="relative flex items-center justify-center w-full h-full">
            <CircularProgress variant="determinate" value={progress} size={100} />
            {total != 0 ? <div className="text-xl md:text-2xl font-bold absolute text-white">
            {current}/{total}
          </div> : null}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TestBox;

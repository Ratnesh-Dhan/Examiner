import React from "react";

const TestBox = () => {
  return (
    <div className="md:m-20 border rounded-lg border-slate-200">
      <div className="flex justify-between md:p-10 p-5">
        <div className="text-xl md:text-3xl">Timer</div>
        <button className="text-xl md:text-3xl">Submit</button>
      </div>
    </div>
  );
};

export default TestBox;

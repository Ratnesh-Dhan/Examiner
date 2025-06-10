import React from "react";

interface OptionsProps {
  numbering: string;
  answers: (string | null)[];
  setAnswers: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  option: string;
  count: number;
}

const Options = ({
  numbering,
  answers,
  setAnswers,
  option,
  count,
}: OptionsProps) => {
  const handleClick = () => {
    const new_ary = [...answers];
    new_ary[count - 1] = numbering;
    setAnswers(new_ary);
  };

  return (
    <div
      className={`relative flex justify-center md:m-10 m-2 cursor-pointer ${
        answers[count - 1] === numbering ? "bg-[#255F38] text-white" : ""
      }`}
      onClick={handleClick}
    >
      <p className="border rounded-lg px-20 py-5 md:text-lg">
        <span className="absolute left-2 font-bold">{numbering}</span>
        {option}
      </p>
    </div>
  );
};

export default Options;

"use client";
// https://dribbble.com/shots/23227125-Quiz-MCQ-Exam-interface-design
// This is link to the design
import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Options from "./Options";

const TestBox = () => {
  interface qanda {
    question: string;
    options: string[];
    answer: string | null;
  }
  const [total] = useState(10);
  const [current, setCurrent] = useState(1);
  const [attempts, setAttempts] = useState(0);
  const [progress, setProgress] = useState(0);
  const [questions] = useState<qanda[]>([
    {
      question:
        "What is the primary function of an operational amplifier (Op-Amp)?",
      options: [
        "To amplify only AC signals",
        "To act as a voltage regulator",
        "To amplify differential signals",
        "To switch digital signals",
      ],
      answer: "To amplify differential signals",
    },
    {
      question:
        "In a common-emitter amplifier, the voltage gain is primarily determined by:",
      options: [
        "Load resistance and input resistance",
        "Collector resistance and emitter resistance",
        "Base resistance and collector resistance",
        "Emitter resistance and power supply voltage",
      ],
      answer: "Collector resistance and emitter resistance",
    },
    {
      question: "The input impedance of an ideal Op-Amp is:",
      options: ["Zero", "Very low", "Very high", "Equal to output impedance"],
      answer: "Very high",
    },
    {
      question:
        "Which configuration of transistor amplifier has the highest power gain?",
      options: [
        "Common base",
        "Common collector",
        "Common emitter",
        "Darlington pair",
      ],
      answer: "Common emitter",
    },
    {
      question: "In a low-pass RC filter, the cut-off frequency increases if:",
      options: [
        "Resistance increases",
        "Capacitance increases",
        "Either resistance or capacitance increases",
        "Either resistance or capacitance decreases",
      ],
      answer: "Either resistance or capacitance decreases",
    },
    {
      question:
        "What is the output of an Op-Amp integrator when a constant input voltage is applied?",
      options: ["Ramp signal", "Sine wave", "Constant voltage", "Square wave"],
      answer: "Ramp signal",
    },
    {
      question: "A Zener diode is primarily used for:",
      options: [
        "Signal amplification",
        "High-frequency oscillation",
        "Voltage regulation",
        "Light emission",
      ],
      answer: "Voltage regulation",
    },
    {
      question: "Which of the following is a linear circuit element?",
      options: ["Diode", "Transistor", "Resistor", "SCR"],
      answer: "Resistor",
    },
    {
      question: "In an inverting Op-Amp configuration, the gain is given by:",
      options: ["-Rf/Rin", "Rf/Rin", "Rin/Rf", "-Rin/Rf"],
      answer: "-Rf/Rin",
    },
    {
      question: "The purpose of a bypass capacitor in an amplifier is to:",
      options: [
        "Filter the output",
        "Increase the bandwidth",
        "Stabilize the gain",
        "Short AC to ground and bypass emitter resistor",
      ],
      answer: "Short AC to ground and bypass emitter resistor",
    },
  ]);
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  useEffect(() => {
    setAnswers(Array(total).fill(null));
  }, []);

  useEffect(() => {
    console.log({ answers });
    let count = 0;
    answers.forEach((elements) => {
      if (elements != null) count = count + 1;
    });
    setAttempts(count);
  }, [answers]);

  useEffect(() => {
    setProgress((attempts / total) * 100);
  }, [attempts, total]);

  const handleSubmit = () => {
    console.log(answers);
  };

  const handleNext = () => {
    if (current == total) {
      handleSubmit();
    } else setCurrent(current + 1);
  };

  const handlePrev = () => {
    console.log(current);
    if (current == 1) {
      return;
    } else setCurrent(current - 1);
  };

  return (
    <div className="md:m-28 m-5 border rounded-lg border-slate-200">
      <div className="flex justify-between md:p-10 p-5">
        <div className="text-xl md:text-2xl">Timer</div>
        <button
          className="text-xl md:text-3xl md:py-2 md:px-5 rounded-lg bg-[#255F38]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div
        id="question-progress"
        className="flex md:flex-row md:justify-around flex-col-reverse items-center"
      >
        <div id="left" className="p-5">
          <p className="md:text-xl text-sm pb-2">
            Question {current} of {total}
          </p>
          <p className="md:text-2xl text-lg font-semibold">
            {questions.length != 0 ? (
              questions[current - 1].question
            ) : (
              <p>none</p>
            )}
          </p>
          <div id="options" className="mx-auto">
            <div className="flex flex-wrap">
              <Options
                numbering="A"
                answers={answers}
                setAnswers={setAnswers}
                option={questions[current - 1].options[0]}
                count={current}
              />
              <Options
                numbering="B"
                answers={answers}
                setAnswers={setAnswers}
                option={questions[current - 1].options[1]}
                count={current}
              />
            </div>
            <div className="flex flex-wrap">
              <Options
                numbering="C"
                answers={answers}
                setAnswers={setAnswers}
                option={questions[current - 1].options[2]}
                count={current}
              />
              <Options
                numbering="D"
                answers={answers}
                setAnswers={setAnswers}
                option={questions[current - 1].options[3]}
                count={current}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="relative flex items-center justify-center w-full h-full my-20">
            <CircularProgress
              variant="determinate"
              value={progress}
              size={100}
            />
            {total != 0 ? (
              <div className="text-xl md:text-2xl font-bold absolute text-white">
                {attempts}/{total}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div id="next" className="flex justify-around mb-5">
        <button
          className="text-xl border-2 border-slate-200 md:text-2xl md:py-2 py-1 px-3 md:px-5 rounded-lg"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="text-xl md:text-2xl md:py-2 md:px-5 rounded-lg bg-[#255F38] py-1 px-3"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestBox;

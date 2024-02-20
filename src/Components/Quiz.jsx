import { useEffect, useState } from "react";
import questions from "../questions.js";

const text = questions.map((question) => question.text);

const answers = questions.map((question) => {
  return question.answers;
});

const TIMER = 6000;

export default function Quiz() {
  const [index, setIndex] = useState(0);

  const handleChangeAnswer = () => {
    if (index < 6) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(index);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (index < 6) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(index);
      }
    }, TIMER);
  }, [index]);

  // const [remainingTime, setRemainingTime] = useState(TIMER);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("interval");
  //     setRemainingTime((prevTime) => prevTime - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div id="quiz">
      <div id="question">
        {/* <progress value={remainingTime} max={5000} /> */}
        <h2>{text[index]}</h2>
        <ul id="answers">
          {answers[index].map((answer, index) => (
            <li className="answer" key={index}>
              <button>{answer}</button>
            </li>
          ))}
        </ul>
        <button onClick={handleChangeAnswer}>Change Answer</button>
      </div>
    </div>
  );
}

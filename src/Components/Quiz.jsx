import { useEffect, useRef, useState } from "react";
import questions from "../questions.js";
import Summary from "./Summary.jsx";

const text = questions.map((question) => question.text);

const answers = questions.map((question) => {
  return question.answers;
});

const TIMER = 6000;

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(TIMER);
  const [answerChoice, setAnswerChoice] = useState([]);

  function handleAnswerChoice(answer) {
    setAnswerChoice((prevState) => {
      return [...prevState, answer];
    });
  }

  // const userAnswers = answers.map((answer, idx) => {
  //   const userAnswer = answerChoice[idx];
  //   return userAnswer === answer[0];
  // });
  // console.log(userAnswers);
  // const correctAnswer = userAnswers.filter((answer) => {
  //   if (answer === true) {
  //     return answer;
  //   }
  // });
  // console.log(correctAnswer);

  // const wrongAnswer = userAnswers.filter((answer) => answer === false);
  // // console.log(wrongAnswer);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < answers.length) {
        setIndex((prev) => prev + 1);
        setRemainingTime(TIMER);
      } else {
        setIndex(index);
      }
    }, TIMER);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return TIMER;
        } else if (index >= answers.length) {
          clearInterval(interval);
        } else {
          return prevTime - 15;
        }
      });
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  return (
    <>
      {index < 7 ? (
        <div id="quiz">
          <div id="question">
            <progress value={remainingTime} max={TIMER} />
            <h2>{text[index]}</h2>
            <ul id="answers">
              {answers[index].map((answer, answerIndex) => (
                <li className="answer" key={answerIndex}>
                  <button
                    onClick={() => handleAnswerChoice(answer)}
                    className={answerChoice[index] === answer ? "correct" : ""}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Summary answerChoice={answerChoice} />
      )}
    </>
  );
}

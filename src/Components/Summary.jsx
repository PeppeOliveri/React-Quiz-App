import completedImg from "../assets/quiz-complete.png";
import questions from "../questions.js";

export default function Summary({ answerChoice }) {
  const answerClicked = questions.map((question) => {
    return question.answers.filter((answer) => answerChoice.includes(answer));
  });

  const correctAnswer = questions.map((question) => question.answers[0]);

  const corrAnswerArr = [];
  const wrongAnswerArr = [];

  for (let i = 0; i < answerClicked.length; i++) {
    const userAnswer = answerClicked[i][0];
    if (userAnswer === correctAnswer[i]) {
      corrAnswerArr.push(userAnswer);
    } else if (userAnswer !== correctAnswer[i]) {
      wrongAnswerArr.push(userAnswer);
    }
  }
  const filteredWrongAnswer = wrongAnswerArr.filter(
    (answer) => answer !== undefined
  );
  const skippedAnswerArr = wrongAnswerArr.filter((skip) => skip === undefined);
  const skipPercentage = Math.round((skippedAnswerArr.length * 100) / 7);
  const correctPercentage = Math.round((corrAnswerArr.length * 100) / 7);
  const wrongPercentage = Math.round((filteredWrongAnswer.length * 100) / 7);

  return (
    <div id="summary">
      <img src={completedImg} />
      <h2>QUIZ COMPLETED</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipPercentage}%</span>
          <span className="text">SKIPPED</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">ANSWERED CORRECTLY</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">ANSWERED INCORRECTLY</span>
        </p>
      </div>
      <ol>
        {questions.map((question) => {
          const userAnswers = question.answers.filter((answer) =>
            answerChoice.includes(answer)
          );
          const correctAnswer = question.answers[0];
          const correctUserAnswer = userAnswers.includes(correctAnswer);
          return (
            <li key={question.id}>
              <h3>{question.id.replace("q", "")}</h3>
              <p className="question">{question.text}</p>
              <p
                className={`user-answer ${
                  userAnswers.length === 0
                    ? "skipped"
                    : correctUserAnswer
                    ? "correct"
                    : "wrong"
                }`}
              >
                {userAnswers.length > 0 ? userAnswers : "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

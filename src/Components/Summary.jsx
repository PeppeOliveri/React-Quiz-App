import completedImg from "../assets/quiz-complete.png";
import questions from "../questions.js";

export default function Summary() {
  return (
    <div id="summary">
      <img src={completedImg} />
      <h2>QUIZ COMPLETED</h2>
      <ol>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.id.replace("q", "")}</h3>
            <p className="question">{question.text}</p>
            <p className="user-answer">Answer</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

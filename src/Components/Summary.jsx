import completedImg from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={completedImg} />
      <h2>QUIZ COMPLETED</h2>
      <ol>
        <li>
          <h3>1</h3>
          <p className="question">Question</p>
          <p className="user-answer">Answer</p>
        </li>
      </ol>
    </div>
  );
}

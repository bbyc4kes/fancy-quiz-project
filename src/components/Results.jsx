import quizIsCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import { v4 as uuidv4 } from "uuid";

function Results({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((a) => a === null);
  const correctAnswers = userAnswers.filter(
    (a, i) => a === QUESTIONS[i].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizIsCompleteLogo} alt="Winning trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((a, i) => {
          let cssClasses = "user-answer";

          if (a === null) {
            cssClasses += " skipped";
          } else if (a === QUESTIONS[i].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={uuidv4()}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClasses}>{a ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Results;

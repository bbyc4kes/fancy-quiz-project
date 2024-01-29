import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Results from "./Results";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback((selectedAnswer) => {
    setUserAnswers(
      (prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      },
      [setUserAnswers]
    );
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizIsComplete) {
    return <Results userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIdx={activeQuestionIndex}
        onSelectedAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;

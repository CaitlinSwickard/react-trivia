import "./App.css";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";
import Reset from "./components/Reset";
import StatBar from "./components/StatBar";

const App = () => {
  const allQuestions = questions as Questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const [waitingToAdvance, setWaitingToAdvance] = useState(false);

  const onSubmit = (correct: boolean) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const reset = () => {
    setCurrentQuestionIdx(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setWaitingToAdvance(false);
  };

  if (currentQuestionIdx >= allQuestions.questions.length)
    return (
      <Reset
        totalQuestions={allQuestions.questions.length}
        correctQuestions={correctAnswers}
        onPress={reset}
      />
    );

  return (
    <div>
      <h1>2000's Trivia</h1>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestions.questions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionCard
        question={allQuestions.questions[currentQuestionIdx]}
        onSubmit={onSubmit}
      />
      {waitingToAdvance && (
        <button onClick={advance}>Next Question...</button>
      )}
    </div>
  );
};

export default App;

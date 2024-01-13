import "./App.css";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";

const App = () => {
  const allQuestions = questions as Questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0); //state to move through questions
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const [waitingToAdvance, setWaitingToAdvance] = useState(false); //state to move to next question

  const onSubmit = (correct: boolean) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  return (
    <div className="container">
      <QuestionCard
        question={allQuestions.questions[currentQuestionIdx]}
        onSubmit={() => {}}
      />
      {waitingToAdvance &&
        <button onClick={advance}>Next Question</button>
      }
    </div>
  );
};

export default App;

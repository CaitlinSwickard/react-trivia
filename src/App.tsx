import React from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";

const App = () => {
  const allQuestions = questions as Questions;
  
  return (
    <div>
      <QuestionCard />
    </div>
  );
};

export default App;

import './App.css';
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";

const App = () => {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

    return (
        <div className="container">
            <QuestionCard
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={() => { }}
            />
        </div>
    );
};

export default App;

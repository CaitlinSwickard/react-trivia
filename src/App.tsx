import "./App.css";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";
import Reset from "./components/Reset";
import StatBar from "./components/StatBar";

const App = () => {
    const allQuestions = questions as Questions; //getting questions from json file

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0); // set question index
    const [correctAnswers, setCorrectAnswers] = useState(0); // set correct answers
    const [incorrectAnswers, setIncorrectAnswers] = useState(0); // set incorrect answers

    const [waitingToAdvance, setWaitingToAdvance] = useState(false); // set waiting to advance

    // when a choice is selected set counters and advance btn
    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    // advance to next question
    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    // reset the game, all states back to 0
    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWaitingToAdvance(false);
    };

    // display reset component if reached the end of game
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
            <h1 className="title">2000's Trivia</h1>
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
            {/* renders when choice is selected */}
            <div className="btn-container">
                {waitingToAdvance && (
                    <button onClick={advance} className="advance-btn answer">
                        Next Question...
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;

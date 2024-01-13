import "./App.css";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./questions.json";
import { Questions } from "./types";
import Reset from "./components/Reset";
import StatBar from "./components/StatBar";


const App = () => {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0); //state to move through questions
    const [correctAnswers, setCorrectAnswers] = useState(0); // num of correct answers
    const [incorrectAnswers, setIncorrectAnswers] = useState(0); // num of incorrect answers

    const [waitingToAdvance, setWaitingToAdvance] = useState(false); //state to move to next question

    // updates score for stat bar
    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    // update state to move to next question
    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    // updates state to reset the game
    const reset = () => {
        setCurrentQuestionIdx(0);
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
        <div className="container">
            <h1 className="title">2000's Trivia</h1>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionCard
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={() => { }}
            />
            {waitingToAdvance && (
                <button onClick={advance}>Next Question...</button>
            )}
        </div>
    );
};

export default App;

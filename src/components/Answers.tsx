import './Answers.css';
import { useState } from "react";
import { Question } from "../types";
import Answer from "./Answer";

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);
    // checks if the answer pressed on is a match to the correct answer index
    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswer === idx);
    };

    return (
        <div className="answers">
            {props.question.answers.map((answer, idx) => {
                // setting up color to display if answer is correct or not
                let color = "";
                if (showAnswer && props.question.correctAnswer === idx)
                    color = "green";
                else if (showAnswer) color = "red";
                return (
                    <Answer
                        text={answer}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}

export default Answers;

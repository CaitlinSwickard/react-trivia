import './QuestionCard.css';
import { Question } from "../types";
import Answers from "./Answers";

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionCard(props: Props) {
    return (
        <div>
            <h3 className="question">{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionCard;

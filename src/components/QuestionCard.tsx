import { Question } from "../types";
import Answers from "./Answers";

type Props = {
  question: Question;
  onSubmit: (correct: boolean) => void;
};

function QuestionCard(props: Props) {
  return (
    <div>
      <h1>2000's Trivia</h1>
      <h3>{props.question.question}</h3>
      <Answers />
    </div>
  );
}

export default QuestionCard;

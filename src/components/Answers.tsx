import { Question } from "../types";

type Props = {
  question: Question;
  onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
  return (
    <div>
      {props.question.answers.map((answer, idx) => (
        <Answer />
      ))}
    </div>
  );
}

export default Answers;

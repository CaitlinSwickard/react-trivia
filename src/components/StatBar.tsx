import './StatBar.css';

type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
};

// stat bar component
function StatBar(props: Props) {
    return (
        <div className="stat-container">
            <p>
                Questions: {props.currentQuestion}/{props.totalQuestions}
            </p>
            <p>Correct: {props.correct}</p>
            <p>Incorrect: {props.incorrect}</p>
        </div>
    );
}

export default StatBar;

// prop break down for reset
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

// end of game display component
function Reset(props: Props) {
    return (
        <div>
            <h1 className="btn-container title">
                You Scored:
                {(props.correctQuestions / props.totalQuestions) * 100}%
            </h1>
            <div className="btn-container">
                <button onClick={props.onPress} className="answer">Play Again!</button>
            </div>
        </div>
    );
}

export default Reset;

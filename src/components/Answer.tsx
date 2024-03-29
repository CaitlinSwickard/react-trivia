import './Answer.css';

type Props = {
    onPress: () => void;
    text: string;
    color?: string;
    disabled?: boolean;
};

// displays correct color for answer and disables btn
function Answer(props: Props) {
    const style = props.color ? { color: props.color } : {};
    return (
        <button onClick={props.onPress} disabled={props.disabled} className="answer">
            <span style={style}>{props.text}</span>
        </button>
    );
}
export default Answer;

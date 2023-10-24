export default function EmotionCarousalCard(props) {
    return (
        <div className="EmotionCarousalCard" style={{background: props.cardColor}}>
            <div className="EmotionCarousalCard_Content">
                <div>{props.emoji}</div>
                <div className="semiMediumText">{props.title}</div>
                <div>{props.desc}</div>
            </div>
        </div>)
}
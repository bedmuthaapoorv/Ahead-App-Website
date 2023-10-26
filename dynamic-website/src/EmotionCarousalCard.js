export default function EmotionCarousalCard(props) {
    return (
        <div className="EmotionCarousalCard" style={{
            background: props.cardColor,
            borderBottomLeftRadius: props.borderBottomLeftRadius,
            borderBottomRightRadius: props.borderBottomRightRadius,
            borderTopLeftRadius: props.borderTopLeftRadius,
            borderTopRightRadius: props.borderTopRightRadius,
            // width: props.cardWidth+'vw'
        }}>
            <div className="EmotionCarousalCard_Content">
                <div>{props.emoji}</div>
                <div className="semiMediumText">{props.title}</div>
                <div>{props.desc}</div>
            </div>
        </div>)
}
import {motion} from "framer-motion"

export default function EmotionCarousalCard(props) {
    return (
        <motion.div 
            whileHover={{scale: 0.9, rotate: '-2deg'}}
            transition={{duration: 0.5}}
        >
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
            </div>
        </motion.div>
        )
}
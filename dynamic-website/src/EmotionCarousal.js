import './stylessheets/EmotionCarousal.css'
import Carousal from './Carousal'
import EmotionCarousalCard from './EmotionCarousalCard'
import AngryEmoji from './assets/angryEmoji2.svg'
import Surprise from './assets/frown.svg'
import { motion } from 'framer-motion'

export default function EmotionCarousal() {
    function getImage(emoji) {
        return <img src={emoji} height={50} alt="emoji" />
    }
    return (
        <div className='Panel Carousal_Wrapper'>
            <div className="Title_Wrapper">
                <motion.div
                    initial={{ width: '180vw' }}
                    whileInView={{ width: '90vw' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="semiBigText Carousal_title">Does this sound familiar...</div>
                </motion.div>
            </div>
            <Carousal slides={[
                <EmotionCarousalCard emoji={getImage(AngryEmoji)} title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#EEEBFE' />,
                <EmotionCarousalCard emoji={getImage(Surprise)} title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#6341EF' />,
                <EmotionCarousalCard emoji={getImage(AngryEmoji)} title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#FFEFD5' />,
                <EmotionCarousalCard emoji={getImage(Surprise)} title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#D8F2FF' />,
                <EmotionCarousalCard emoji={getImage(AngryEmoji)} title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#EEEBFE' />
            ]}>

            </Carousal>
        </div>
    )
}
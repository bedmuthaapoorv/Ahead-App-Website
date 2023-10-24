import './stylessheets/EmotionCarousal.css'
import Carousal from './Carousal'
import EmotionCarousalCard from './EmotionCarousalCard'

export default function EmotionCarousal(){
    return (
        <div className='Panel Carousal_Wrapper'>
            <div className="Title_Wrapper">
                <div className="semiBigText Carousal_title">Does this sound familiar...</div>    
            </div>
            <Carousal slides={[
                <EmotionCarousalCard emoji='angry' title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#EEEBFE' />,
                <EmotionCarousalCard emoji='angry' title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#6341EF' />,
                <EmotionCarousalCard emoji='angry' title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#FFEFD5' />,
                <EmotionCarousalCard emoji='angry' title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#D8F2FF' />,
                <EmotionCarousalCard emoji='angry' title='you argue with your collegue' desc='you get angry
                 and defensive, instead of staying open and 
                working towards common ground' cardColor='#EEEBFE' />
            ]}>
                
            </Carousal>
        </div>
    )
}
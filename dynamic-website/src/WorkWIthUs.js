import './stylessheets/WorkWithUs.css'
import EmotionCarousalCard from './EmotionCarousalCard'
import ScrollableBullets from './ScrollableBullets'
export default function WorkWithUs(){
    const desc=[
        "At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work, and that's what Ahead is all about",
        "Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did.."
]
    const benefitTitles=[
        "Power through even when the going gets though",
        "Learn more about who you are",
        "Play and grow together"
    ]
    const benefitDesc=[
        "We help you spot and work around whatever stands in the way, be it bad habits, fear, etc.",
        "We ask the right questions to help you better understand why you do things the way you do.",
        "Ahead feels like a game, not lika a chore. See yourself grow everyday towards achieving your goals!"
    ]
    return (
        <div className="Poster WorkWithUs_Container" style={{
            background:'#F3F1FF'
        }}>
            <div className='WorkWithUs_Wrapper'>
                <div className="WorkWithUs_Titles">
                    <div className="WorkWithUs_Title semiBigText">Work With Us</div>
                    <div className="WorkWithUs_Logo semiBigText">ahead</div>
                </div>
                <div className="WorkWithUs_Content">
                    <div className="WorkWithUs_Description">
                        <div className="WorkWithUs_About">
                            <EmotionCarousalCard emoji={'ghost'} title={'About'} desc={desc[0]} cardColor={'white'} borderBottomLeftRadius={0} borderBottomRightRadius={0} type='Card' cardWidth={30}></EmotionCarousalCard>
                        </div>
                        <div className="WorkWithUs_Product">
                            <EmotionCarousalCard title={'Product'} desc={desc[1]} cardColor={'#FEF7F1'} borderTopLeftRadius={0} borderTopRightRadius={0} type='Card' cardWidth={30}></EmotionCarousalCard>
                        </div>
                    </div>
                    <div className="WorkWithUs_Benefits">
                        <ScrollableBullets type={'Cards'} titles={benefitTitles} desc={benefitDesc} scrollerHeight={65}></ScrollableBullets>
                    </div>
                </div>
            </div>
        </div>
    )
}
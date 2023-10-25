import './stylessheets/MotivationPage.css'
import ScrollableBullets from './ScrollableBullets'
export default function MotivationPage(){
    const labels = ["It's not as easy as 123", 
        "Old Habits are hard to break",
        "You and your motivation don't have long term relationship",
        "Books just don't offer practical solutions",
        "It's not as easy as 123", 
        "Old Habits are hard to break",
        "You and your motivation don't have long term relationship",
        "Books just don't offer practical solutions"
    ]
    const desc=[
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
        "And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use",
        "Luckily we can proactively prepare you for the marathon, not just the race. Effective memorable exercises will help you to stick to your goals",
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)",
        "And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use",
        "Luckily we can proactively prepare you for the marathon, not just the race. Effective memorable exercises will help you to stick to your goals",
        "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)"
    ]
    
    return (
        <div className="Poster MotivationPage_Wrapper">
            <div className="MotivationPage_Title">
                <div className="MotivationPage_Label">Wrong with self-improvement 
                & how we're fixing it.</div>
                <div className="bigText">Self improvement. Ugh.</div>
            </div>
            <ScrollableBullets labels={labels} desc={desc} scrollerHeight={79} />
            {/* <div className="MotivationPage_ScrollableBullets">
            </div> */}
        </div>
    )
}
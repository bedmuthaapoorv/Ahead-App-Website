import './stylessheets/AppIntroduction.css'
import FlowerIconSteps from './FlowerIconSteps'
export default function AppIntroduction() {
    function getFlowerIcons(n) {
        return [...Array(n)].map((key, val) => {
            return <FlowerIconSteps key={val} number={val} flowerWidth={50} />
        })
    }
    return (
        <div className="Poster AppIntroduction_Wrapper" style={{
            background: '#EDF8FE'
        }}>
            <div className='AppIntroduction_Description'>
                <div>Let your friends, family, and co-workers (anonymously) rate your social skills</div>
                <div className='bigText AppIntroduction_LargeText'>Ever wondered what others think of you?</div>
            </div>
            <div className='AppIntroduction_Steps'>
                {getFlowerIcons(3)}
            </div>
            <div className='AppIntroduction_Diagram'>
                <div className='AppIntroduction_Rectangle'></div>
                <div className='Rectangle' style={{ background: '#6442EF', top: '20%', left: '-4%' }}><strong>You</strong></div>
                <div className='Rectangle' style={{ background: '#FBB136', top: '20%', left: '50%' }}><strong>Anonymous 2</strong></div>
                <div className='Rectangle' style={{ background: '#3FC2FC', top: '60%', left: '16%' }}><strong>Anonymous 1</strong></div>
                <div className='Rectangle' style={{ background: '#57C996', top: '60%', left: '80%' }}><strong>Anonymous 3</strong></div>
            </div>
        </div>
    )
}
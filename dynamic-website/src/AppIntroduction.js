import './stylessheets/AppIntroduction.css'
import FlowerIconSteps from './FlowerIconSteps'
export default function AppIntroduction(){
    function getFlowerIcons(n){
        return [...Array(n)].map((key, val)=>{
            return <FlowerIconSteps key={val} number={val} flowerWidth={50}/>
        })
    }
    return (
        <div className="Poster AppIntroduction_Wrapper" style={{
            background: '#EDF8FE'
        }}>
            <div className='AppIntroduction_Description'>
                <div >Let your friends, family, and co-workers (anonymously) rate your social skills</div>
                <div className='bigText'>Ever wondered what other think of you?</div>
            </div>
            <div className='AppIntroduction_Steps'>
                {getFlowerIcons(3)}
            </div>
            <div className='AppIntroduction_Diagram'>
                <div className='AppIntroduction_Rectangle'></div>
                {/* <Rectangle text={'You'}></Rectangle>
                <Rectangle text={'Anonymous 1'}></Rectangle>
                <Rectangle text={'Anonymous 2'}></Rectangle>
                <Rectangle text={'Anonymous 3'}></Rectangle> */}
            </div>
        </div>
    )
}
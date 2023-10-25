import './stylessheets/AppIntroduction.css'
import FlowerIconSteps from './FlowerIconSteps'
export default function AppIntroduction(){
    function getFlowerIcons(n){
        return [...Array(n)].map((key, val)=>{
            return <FlowerIconSteps key={val} number={val}/>
        })
    }
    return (
        <div className="Poster AppIntroduction_Wrapper" style={{
            background: '#EEEBFE'
        }}>
            <div className='AppIntroduction_Description'>
                <div >Let your friends, family, and co-workers (anonymously) rate your social skills</div>
                <div className='bigText'>Ever wondered what other think of you?</div>
            </div>
            <div className='AppIntroduction_Steps'>
                {getFlowerIcons(3)}
            </div>
            <div className='AppIntroduction_Diagram'>
                
            </div>
        </div>
    )
}
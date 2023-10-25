import './stylessheets/AboutApp.css'
import Ring from './assets/Ring.svg'
import Ghost from './assets/Ghost.svg'
import FlowerIconSteps from './FlowerIconSteps';
export default function AboutApp(){
    return (
        <div className="Poster AboutApp_Wrapper" style={{
            background: '#FEF7F1'
        }}>
            <div className='AboutApp_Element'>
                <div className='AboutApp_Left'>
                    <div className='AboutApp_Title'>
                        <div className='AboutApp_smallTitle semiMediumText'>Built out of frustration</div>
                        <div className='AboutApp_bigTitle bigText'>Meet the Ahead App</div>
                    </div>
                    <div className='AboutApp_ImageComponent'>
                        <div className='AboutApp_Flower'>
                            <FlowerIconSteps number={1} flowerWidth={50}></FlowerIconSteps>
                        </div>
                        <img src={Ring} alt="image about app" className='AboutApp_Image'/>
                        <img src={Ghost} alt="Ghost emoji" className='AboutApp_Ghost'></img>
                    </div>
                </div>
            </div>
            <div className='AboutApp_Element semiMediumText'>
                A personalized pocket coach that provides bite-sized, science-driven 
                tools to boost emotional intelligence<br />Think of it as a pocket 
                cheerleader towards a better, more fulfilling life.
            </div>
        </div>
    );
}
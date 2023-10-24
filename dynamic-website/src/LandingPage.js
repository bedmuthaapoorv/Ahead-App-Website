import './stylessheets/Board.css'
import './stylessheets/LandingPage.css'
import appStoreImage from './assets/app-store.svg'
export default function LandingPage(){
    return (
        <div className="Poster" style={{
            background: '#EEEBFE'
        }}>
            <div className='LandingPage_Section'>
                <div className='LandingPage_Left'>
                    <div>Ahead App</div>
                    <div className='bigText'>Master your Life by Mastering Emotions</div>
                    <a href="https://ahead-app.onelink.me/jpmx/lzrit6wt"  rel="noopener noreferrer">
                    <img className='smallImage' src={appStoreImage} alt="link to app store" />
                    </a>
                </div>
            </div>
            <div className='LandingPage_Section'>
                
            </div>
        </div>
    );
}
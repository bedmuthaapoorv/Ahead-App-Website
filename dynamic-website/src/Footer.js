import Logo from './assets/aheadApp.jpg';
import './stylessheets/Footer.css'
import AppStore from './assets/app-store.svg'

export default function Footer(){
    return (
        <div className="Panel Footer">
            <img src={Logo} alt="app logo" className='smallImage'></img>
            <div className="Footer_AppName bigText">ahead</div>
            <div className="Footer_ContactDetails semiMediumText">
                <div>Auguststraße 26, 10117 Berlin</div>
                <div>hi@ahead-app.com</div>
            </div>
            <div className="Footer_AppStoreLogo">
                <img src={AppStore} alt='app store'></img>
            </div>
            <div>2022 Ahead app. All rights reserved.</div>
        </div>
    )
}
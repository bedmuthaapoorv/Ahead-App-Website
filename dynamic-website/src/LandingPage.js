import './stylessheets/Board.css'
import './stylessheets/LandingPage.css'
import appStoreImage from './assets/app-store.svg'
import appImage from './assets/appImage.png'
import { motion } from 'framer-motion'

export default function LandingPage(){
    return (
        <div className="Poster" style={{
            background: '#EEEBFE'
        }}>
            <div className='LandingPage_Section'>
                <motion.div
                    initial={{ width: '80vw' }}
                    whileInView={{ width: '40vw' }}
                    transition={{ duration: 0.5 }}
                >
                <div className='LandingPage_Left'>
                    <div className='semiMediumText'>Ahead App</div>
                    <div className='bigText'>Master your Life by Mastering Emotions</div>
                    <a href="https://ahead-app.onelink.me/jpmx/lzrit6wt"  rel="noopener noreferrer">
                    <img className='smallImage' src={appStoreImage} alt="link to app store" />
                    </a>
                </div>
                </motion.div>
            </div>
            <div className='LandingPage_Section'>
                <div className='Circle'></div>
                <motion.div 
                    initial={{rotate: '-90deg'}}
                    whileInView={{rotate: 0}}
                    transition={{ duration: 0.5}}
                >
                    <img src={appImage} className='LandingPage_image'></img>
                </motion.div>
            </div>
        </div>
    );
}
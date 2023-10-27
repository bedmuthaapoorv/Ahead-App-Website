import EmotionCarousalCard from "./EmotionCarousalCard"
import {motion} from "framer-motion"

export default function ScrollableBullets(props){
    function getBullets(){
        return props.labels.map((val, key)=>{
            //console.log(key);
            return ( 
            <motion.div

                whileInView={{opacity: 0.5}}
                whileHover={{opacity: 1}}
                transition={{duration: 0.5}}
            >
            <div className="BulletSection_Wrapper">
                <div className="Bullet"></div>
                <div className="BulletSection_TextSection">
                    <div className="semiMediumText">{val}</div>
                    <div>{props.desc[key]}</div>
                </div>
            </div>
            </motion.div>
            )
        })
    }
    function getCards(){
        return props.titles.map((val, key)=>{
            return <div style={{
                    paddingBottom:'20px'              
                }}>
                    <EmotionCarousalCard title={val} desc={props.desc[key]} cardColor={'white'}></EmotionCarousalCard>
                </div>
            
        });
    }
    return (
        <div className="ScrollableBullets_Wrapper" style={{
            height: props.scrollerHeight+'vh'
        }}>
            <div style={{
                marginTop: '40vh'
            }}>{props.type==='bullets'? getBullets(): getCards()}</div>
        </div>
    )
}
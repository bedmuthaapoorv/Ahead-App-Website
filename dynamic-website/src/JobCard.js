import BulletPoint from "./BulletPoint"

export default function JobCard(props){
    function getBullets(){
        //console.log(props.points)
        return props.points.map((val, key)=>{
            //console.log(val)
            return <BulletPoint points={val}></BulletPoint>;
        })
    }
    return <div style={{paddingTop: '20px'}}>
        <div className="JobCard">
            <div className="JobCard_Wrapper">
                <div className="semiMediumText">{props.title}</div>
                {getBullets()}
            </div>
        </div>
    </div>
}
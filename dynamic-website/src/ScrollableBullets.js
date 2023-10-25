export default function ScrollableBullets(props){
    function getBullets(){
        return props.labels.map((val, key)=>{
            //console.log(key);
            return ( 
            <div className="BulletSection_Wrapper">
                <div className="Bullet"></div>
                <div className="BulletSection_TextSection">
                    <div className="semiMediumText">{val}</div>
                    <div>{props.desc[key]}</div>
                </div>
            </div>
            )
        })
    }
    // function getBulletLine(){
    //     return props.labels.map((val)=>{
    //         return <div className="Bullet"></div>
    //     })
    // }
    return (
        <div className="ScrollableBullets_Wrapper" style={{
            height: props.scrollerHeight+'vh'
        }}>
            {/* <div className="ScrollableBullets_BulletWrapper">{getBulletLine()}</div> */}
            {getBullets()}
        </div>
    )
}
export default function BulletPoint(props){
    
    return (
        <div className="Bullet_Wrapper">
            <div className="smallBullet"></div>
            <div className="Point">{props.points}</div>
        </div>
    )
}
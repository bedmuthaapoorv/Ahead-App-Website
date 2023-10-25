
export default function FlowerIconSteps(props){
    return (
        <div className='flowerIcon' 
            style={{ width: props.flowerWidth, height: props.flowerWidth}}
        >
            {props.number}
        </div>
    );
}
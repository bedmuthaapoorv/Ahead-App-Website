import './stylessheets/Description.css'
export default function Description(props) {
    return (
        <div className='Panel Description_Wrapper'>
            <div className='Description_Rows'>
                <div className='mediumText Description_RowElement'>{props.title}</div>
                <div className='Description_RowElement'>{props.desc1}</div>
                <div className='Description_RowElement'>{props.desc2}</div>
            </div>
        </div>
    );
}
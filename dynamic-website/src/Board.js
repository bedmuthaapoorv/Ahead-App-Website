import './stylessheets/Board.css'
export default function Board(props){
    return (
        <div className="Board">
            {props.comp}
        </div>
    );
}
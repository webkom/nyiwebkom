
import "./Inputfelt.css"


type Props = {
    name: string;
}
const Inputfelt = ({name}:Props) => {
    

   
    return (
        <div className="todo" >
            <h3>{name}</h3>
            
        </div>

    );

}

export default Inputfelt;
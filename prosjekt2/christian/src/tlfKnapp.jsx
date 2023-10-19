
const TlfKnapp = ({nummer, set, verdi}) => {
    return (
        <>    
            {nummer.map((num) => (
                <button type = "button" value={num} onClick={event => set(verdi + event.target.value)}> {num} </button>
            ))}
        </>
    );
}

export default TlfKnapp


const SkrivIn = ({skrift, set}) => {
    return (
        <div>    
            <label for =  {skrift}> {skrift} </label>
            <input type = "number" onChange={event => set(parseInt(event.target.value))} name = {skrift}/>
        </div>
    )
}

// const SkrivIn = () => {
//     return (
//         <div>

//         </div>
//     )
// }

export default SkrivIn
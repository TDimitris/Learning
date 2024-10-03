import {useState} from "react";

export default function Counter(){
    
    const [counter, setCounter] = useState(0);
    
    const changeCounter = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <p>The count is : {counter}</p>
            <button onClick={changeCounter}>Add to counter!</button>
        </div>
    )
}
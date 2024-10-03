import './ColorBox.css';
import {useState} from 'react';

function randomChoice(arr) {
        const idx = Math.floor(Math.random() * arr.length);
        const randomColor = arr[idx];
        return randomColor;
}

export default function ColorBox({colors}) {

    const [color, setColor] = useState(randomChoice(colors));

    const changeColor = () =>{
        
        setColor(randomChoice(colors));
    }


    return (
        <div 

            className="ColorBox"
            onClick={changeColor}
            style={{backgroundColor: color}}>

        </div>
    )
}
import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {

    const [ isEditing, setIsEditing ] = useState(false);

    const [ playerName, setPlayerName ] = useState(initialName);

    function handleEditing(){
        setIsEditing((editing) => !editing);
    };

    function handleChange(evt) {
        setPlayerName(evt.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
      editablePlayerName = <input onChange={handleChange} type="text" required value={playerName}></input>;
    }
   
        

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    )
}
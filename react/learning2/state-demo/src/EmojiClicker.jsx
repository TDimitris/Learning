import {v4 as uuid} from 'uuid';
import { useState } from "react";

export default function EmojiClicker() {


    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😀"},
        {id: uuid(), emoji: "😎"},
        {id: uuid(), emoji: "😪"},
        {id: uuid(), emoji: "🥱"}
    ]);
    const addEmoji = () => {

        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: "😡"}]);

    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id);
        });
    };

    const changeToHearts = () => {
        setEmojis(emojis.map(prevEmojis => {
            return {
                ...prevEmojis,
                emoji: "❤"
                    };
                }    
            )
        );
    }


    return(
        <div>
            {emojis.map(e => (
                <span onClick={() => deleteEmoji(e.id)}
                key={e.id}
                style={{fontSize: "4rem"}}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={changeToHearts}>Make them all hearts</button>;
        </div>
    )

}
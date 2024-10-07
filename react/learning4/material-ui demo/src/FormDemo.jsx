import { Slider, TextField, Box } from "@mui/material";
import { useState } from "react";

export default function FormDemo(){

    const [name, setName] = useState("");
    const [volume, setVolume] = useState(25);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateVolume = (e, newVal) => {
        setVolume(newVal);
    };

    return(
        <Box sx={{border: "4px solid red", p: 6, width: 300, height: 300, margin: "0 auto"}}>
        
            <h2>Name is : {name}</h2>
            <TextField
                id="outlined-basic"
                label="User's Name"
                variant="outlined"
                placeholder="User's Name"
                value={name}
                onChange={updateName}
            />
            <h2>Volume : {volume}</h2>
            <Slider
                aria-label="Volume"
                value={volume}
                onChange={updateVolume}
            />
        
        </Box>
    )
};
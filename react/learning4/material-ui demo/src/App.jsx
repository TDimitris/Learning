import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from "./FormDemo";
import Navbar from './Navbar';



function App() {

  return (
    <div>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button color="success" variant="contained">Contained</Button>
      <Button color="secondary" variant="contained" size="small">Contained</Button>
    
      <IconButton color="secondary" arial-label="add an alaram">
        <AlarmIcon/>
      </IconButton> */}

      {/* <RatingDemo /> */}

      <Navbar />  
      <FormDemo />

    
    </div>
  )
}

export default App

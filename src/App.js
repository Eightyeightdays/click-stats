import './App.css';
import { useState, useEffect } from 'react';
import Display from './Display.js';
import {NAMES, LINKS} from "./constants.js"

export default function App() {
  const [clicks, setClicks] = useState();

  useEffect(()=>{
    // fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ENDPOINT}`) // live link
    fetch(`http://localhost:4000/${process.env.REACT_APP_ENDPOINT}`)               // local API
    .then(data => data.json())
    .then(json => {
      setClicks(json);
    })
    }, [] 
  )

  return (
    <div className='container'>

      {clicks && clicks.map((el, index) =>{
        return <Display link={LINKS[index]} name={NAMES[index]} length={el.length} arr={el} key={index}/>
      })}

    </div>
  )
}
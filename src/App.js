import './App.css';
import { useState, useEffect } from 'react';
import Display from './Display.js';
import {NAMES, LINKS} from "./constants.js";
import generateEmoji from "./generateEmoji.js";

export default function App() {
  const [clicks, setClicks] = useState();
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalEmoji, setTotalEmoji] = useState();
  
  useEffect(()=>{
      // fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ENDPOINT}`) // live link
      fetch(`http://localhost:4000/${process.env.REACT_APP_ENDPOINT}`)               // local API
      .then(data => data.json())
      .then(json => {
        setClicks(json)
        var total = 0;
        json.map(el => total+=el.length); 
        setTotalClicks(total);
        setTotalEmoji(generateEmoji(total));
      });
    }, [] 
  )
    
  return (
    <div className='app'>
      <div className='intro'>
        <h1>So how many times has my portfolio been viewed? &#129335;</h1>
        <p>Out of curiosity I set up an API <a href="https://github.com/Eightyeightdays/click-logger">here</a> to enable me to log the number of clicks that the links in my CV receive when I send it out to prospective employers.</p>   
        <p>&#128197; Live since: 1st March 2023</p>
        {totalEmoji &&  <h2>Total clicks: {totalClicks} {String.fromCodePoint(totalEmoji)}</h2>}
      </div>

      <div className='card-container'>
        {clicks && clicks.map((el, index) =>{
          return <Display link={LINKS[index]} name={NAMES[index]} length={el.length} arr={el} key={index}/>
        })}
      </div>
    </div>
  )
}
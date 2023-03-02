import './App.css';
import { useState, useEffect } from 'react';
import {NAMES, LINKS} from "./constants.js";
import Display from './Display.js';
import generateEmoji from "./generateEmoji.js";
import login from './login.js';
import updateApplications from './updateApplications.js';


export default function App() {
  const [clicks, setClicks] = useState();
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalEmoji, setTotalEmoji] = useState();
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState();
  const [date, setDate] = useState();
  
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

      <div className='login-container'>
        <form encType="multipart/form-data" method="post" id="login">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="input" name="password"/>
          <div className="login-button" onClick={(e)=>login(setToggle, e)}>{toggle? "Logout" : "Login"}</div>
        </form>
      </div>

      {toggle && 
      <div className='input-container'>
        <form encType="multipart/form-data" method="put" id="update">
          <label htmlFor='applications'>Add new applications</label>
          <input type="number" min="1" max="10" name="applications"/>
          <div className='update-button' onClick={(e)=>updateApplications(e, setCount, setDate)}>Update</div>
        </form>
        {count && <p>{date}{count}</p>}
      </div>
      }
    </div>
  )
}
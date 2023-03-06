import './App.css';
import { useState, useEffect } from 'react';
import {NAMES, LINKS} from "./constants.js";
import Display from './Display.js';
import generateEmoji from "./generateEmoji.js";
import login from './login.js';
import Loading from "./loadingScreen.js";
import updateApplications from './updateApplications.js';
import image1 from "./images/BSM3.png"
import image2 from "./images/Lister.png"
import image3 from "./images/grid.png"
import image4 from "./images/GITHUB.png"
import image5 from "./images/avatar.png"
import image6 from "./images/YT.png"


export default function App() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [clicks, setClicks] = useState();
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalEmoji, setTotalEmoji] = useState();
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const liveDate = "Friday March 3 2023";
  
  useEffect(()=>{
      //Click Stats
      fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ENDPOINT}`) // LIVE LINK 
      // fetch(`http://localhost:4000/${process.env.REACT_APP_ENDPOINT}`)         // local API
      .then(data => data.json())
      .then(json => {
        setClicks(json)
        var total = 0;
        json.map(el => total+=el.length); 
        setTotalClicks(total);
        setTotalEmoji(generateEmoji(total));
      });

      //Application Stats
      fetch(`${process.env.REACT_APP_BASE_URL}app-stats`) // LIVE LINK 
      // fetch("http://localhost:4000/app-stats")         // local API
      .then(data => data.json())
      .then(json =>{
        setCount(json.count);
        setDate(json.lastUpdated);
      })
    }, [] 
  )

  function openSettings(){
    setOpen(!open);
  }

  return (
    
    <div className='app'>
      <div className='intro'>
        <h1>So how many times has my portfolio been viewed? &#129335;</h1>
        <p>Out of curiosity I set up an API <a className="api-link" href="https://github.com/Eightyeightdays/click-logger">here</a> to enable me to log the number of clicks that the links in my CV receive when I send it out to prospective employers.</p>   
        <p>&#128197; Live since: {liveDate}</p>
        {totalEmoji &&  <h2>Total clicks: {totalClicks} {String.fromCodePoint(totalEmoji)}</h2>}
        <h2>Last application sent: <u>{date}</u></h2>
        <h2>Total applications sent since <u>{liveDate}</u>:</h2>
        <div className='total-count'>{count}</div>
      </div>

      <div className='card-container'>
        <div className='cards'>
          {clicks && clicks.map((el, index) =>{
            if(index < 3){
              return <Display link={LINKS[index]} name={NAMES[index]} length={el.length} arr={el} src={images[index]} key={index}/>
            }
            return null;
          })}
        </div>
        <div className='cards'>
        {clicks? clicks.map((el, index) =>{
            if(index >= 3){
              return <Display link={LINKS[index]} name={NAMES[index]} length={el.length} arr={el} src={images[index]} key={index}/>
            }
            return null;
          }):
          <Loading />
        }
        </div>
      </div>
      
      <div className='settings-container'>
        <div className='settings-button' onClick={openSettings}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </div>
        {open &&
          <div className='login-container'>
            <form encType="multipart/form-data" method="post" id="login">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"/>
              <label htmlFor="password">Password</label>
              <input type="input" name="password"/>
              <div className="login-button" onClick={(e)=>login(setToggle, toggle, e)}>{toggle? "Logout" : "Login"}</div>
            </form>
          </div>
        }
        {open && toggle &&
          <div className='input-container'>
            <form encType="multipart/form-data" method="put" id="update">
              {/* <label htmlFor='applications'>Add new applications</label> */}
              {/* <input type="number" min="1" max="10" name="applications"/> */}
              <label htmlFor='company'>Company Name</label>
              <input type="text" name="company"></input>
              <label htmlFor='title'>Job Title</label>
              <input type="text" name="jobTitle"></input>
              <label htmlFor='title'>Location</label>
              <input type="text" name="location"></input>
              <label htmlFor='title'>Link</label>
              <input type="text" name="link"></input>
              <label htmlFor='title'>Date Applied</label>
              <input type="datetime-local" name="dateApplied"></input>
              <label htmlFor='title'>Unique CV ID</label>
              <input type="text" name="cvid"></input>
              <div className='update-button' onClick={(e)=>updateApplications(e, setCount, setDate)}>Add Application</div>
            </form>
          </div>
        }
      </div>
    </div>
  )
}
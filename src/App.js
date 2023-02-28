import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [clicks1, setClicks1] = useState();

  useEffect(()=>{
    // fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ENDPOINT_1}`) // live link
    fetch(`http://localhost:3000/${process.env.REACT_APP_ENDPOINT_1}`)               // local API
    .then(data => data.json())
    .then(json => setClicks1(json))
    }, [] 

  )

  return (
      <ul>
        {clicks1 && clicks1.map((element, key)=>{
          return <li key={key}>{element.dateCreated}</li>
        })}
      
      </ul>
  
  );
}

export default App;

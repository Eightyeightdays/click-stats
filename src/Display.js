import "./Display.css";
import { useState } from "react";
import generateEmoji from "./generateEmoji.js";

export default function Display({link, name, length, arr, src}){
    const [toggle, setToggle] = useState(false);
    const emoji = generateEmoji(length);
    
    function handleToggle(){
        setToggle(!toggle);
    }

    return(
        <div className="card">
            <a className="card-link" href={link}>
                <h2 className="card-title" >{name}</h2>
                <div className="image-container">
                    <img src={src} alt=""></img>
                </div>
            </a>
            <p className="click-count">{length} {length===1? "Click": "Clicks"} {String.fromCodePoint(emoji)}</p>
            
            {length >=1 && 
            <div className="date-container" onClick={handleToggle}>
                {!toggle? "Show dates" : "Hide dates"}
                {toggle && 
                    <div className="date-container-inner">
                        {arr.map(el=><div className="date">{el}</div>)}
                    </div>}    
            </div>
            }
        </div>
    )
}
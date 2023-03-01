import "./Display.css";

export default function Display({link, name, length, arr, src}){
    return(
        <div className="card">
            <a href={link}>
                <h2>{name}</h2>
            </a>
            <div className="image">
                <img src={src} alt=""></img>
            </div>
            <p>{length} {length===1? "Click": "Clicks"}</p>
            <ul>
                {arr.map(el=><li>{el}</li>)}
            </ul>
        </div>
    )
}
import Cookies from "js-cookie";

export default function login(){
    const form = document.getElementById("login");
    const user = Object.fromEntries(new FormData(form).entries());
    
    let settings = {
        method: "post",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            // "Authorization": Cookies.get("token"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    fetch(`http://localhost:4000/login`, settings)
    .then(res => res.json())
    .then(data => {
        if(data.token){
            Cookies.set("userId", data.userId, {sameSite: "strict"});
            Cookies.set("token", data.token, {sameSite: "strict"});
        }    
        console.log(data)
    })

}
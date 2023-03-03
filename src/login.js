import Cookies from "js-cookie";

export default function login(setToggle, toggle, e){
    e.preventDefault();
    
    if(Cookies.get("token") && toggle){
        console.log("User logged in was logged out")
        Cookies.remove("token");
        Cookies.remove("userId");
        console.log("cookies removed")
        setToggle(false)
        return
    }

    const form = document.getElementById("login");
    const user = Object.fromEntries(new FormData(form).entries());
    
    let settings = {
        method: "post",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    // fetch(`http://localhost:4000/login`, settings)
    fetch(`${process.env.REACT_APP_BASE_APP}${process.env.REACT_APP_LOGIN_ENDPOINT}`, settings)
    .then(res => res.json())
    .then(data => {
        if(data.token){
            Cookies.set("userId", data.userId, {sameSite: "strict"});
            Cookies.set("token", data.token, {sameSite: "strict"});
            setToggle(true);
        }else{
            console.log("Unable to validate user: no token found");
        }   
    })
    .catch(error => console.log(error))

}
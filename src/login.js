export default function login(){
    const form = document.getElementById("login");
    const user = Object.fromEntries(new FormData(form).entries());
    console.log(user)
    
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

}
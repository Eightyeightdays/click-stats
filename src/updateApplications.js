import Cookies from "js-cookie";

export default function updateApplications(e, setCount, setDate){
    e.preventDefault();
    const form = document.getElementById("update");
    const data = Object.fromEntries(new FormData(form).entries());
    data.userId = Cookies.get("userId"); // to be checked on back end against decoded JWT info
    
    
    let settings = {
        method: "post",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Authorization": Cookies.get("token"), // for update requests
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    fetch(`http://localhost:4000/update`, settings)
    // fetch(`${process.env.REACT_APP_BASE_URL}update`, settings)
    .then(res => res.json())
    .then(json => {
        // setCount(json.count);
        // setDate(json.lastUpdated);
    })
    .catch(error => console.log(error))

}
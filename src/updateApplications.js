export default function updateApplications(e){
    e.preventDefault();
    const form = document.getElementById("update");
    const user = Object.fromEntries(new FormData(form).entries());
    console.log(user)

}
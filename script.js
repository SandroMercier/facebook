const menuIcon = document.getElementById("profile");
const menuProfile = document.getElementById("menu");
const registerBtn = document.getElementById("register-btn");
const registerDiv = document.getElementById("register");
const loginBtn = document.getElementById("login-btn");
const loginDiv = document.getElementById("login");
const darkMode = document.getElementById("dark-mode");
const closeBtn = document.getElementById("close");


 darkMode.addEventListener("change", ()=>{
     document.body.classList.toggle("dark");
 })

 closeBtn.addEventListener("click", ()=>{
    loginDiv.classList.remove("active");
 })
 closeBtn.addEventListener("click", ()=>{
    registerDiv.classList.remove("active");
 })


menuIcon.addEventListener("click", ()=>{
    menuProfile.classList.toggle("active");
    loginDiv.classList.remove("active");
    registerDiv.classList.remove("active");
})
loginBtn.addEventListener("click", ()=>{
    menuProfile.classList.remove("active");
    loginDiv.classList.toggle("active");
    registerDiv.classList.remove("active");
})
registerBtn.addEventListener("click", ()=>{
    menuProfile.classList.remove("active");
    registerDiv.classList.toggle("active");
    loginDiv.classList.remove("active");
})

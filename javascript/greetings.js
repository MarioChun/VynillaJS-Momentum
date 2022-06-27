
const loginForm = document.querySelector(".login-form");
const loginInput= document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const btn = document.querySelector("#changeBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Awesome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    btn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}

function changeUsername(){
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    btn.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
}

btn.addEventListener("click", changeUsername);
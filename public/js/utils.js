// <- THEME TOGGLE ======================================== ->

const lightTheme = document.querySelector("#lightTheme");
const darkTheme = document.querySelector("#darkTheme");

lightTheme.onclick = () => {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
};

darkTheme.onclick = () => {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
};

// <- SET NAME ======================================== ->

const userNameInput = document.querySelector("#userNameInput");
const userNameForm = document.querySelector("#userNameForm");

const setUserName = (value) => {
    window.localStorage.setItem("userName", JSON.stringify(value));
};

userNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.localStorage.setItem("userName", userNameInput.value);
});

// <- THEME TOGGLE ======================================== ->

document.querySelector("body").onload = () => {
    const theme = localStorage.getItem("theme");
    theme
        ? document.querySelector("body").classList.add(theme)
        : localStorage.setItem("theme", "light");
};

const lightTheme = document.querySelector("#lightTheme");
const darkTheme = document.querySelector("#darkTheme");

lightTheme.onclick = () => {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
    localStorage.setItem("theme", "light");
};

darkTheme.onclick = () => {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    localStorage.setItem("theme", "dark");
};

// <- FORM VALIDATOR ======================================== ->
// add event listener to change/enable 'Join Room' button when ready

// <- NAME GENERATOR ======================================== ->

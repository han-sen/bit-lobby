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

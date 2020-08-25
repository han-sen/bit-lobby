// <- THEME TOGGLE ======================================== ->

// theme buttons

const lightTheme = document.querySelector("#lightTheme");
const darkTheme = document.querySelector("#darkTheme");

// load a users theme from localStorage if it exists
document.querySelector("body").onload = () => {
    const theme = localStorage.getItem("theme");
    theme
        ? document.querySelector("body").classList.add(theme)
        : localStorage.setItem("theme", "light");
    // highlight the correct theme button
    theme === "dark"
        ? darkTheme.classList.add("is-active")
        : lightTheme.classList.add("is-active");
};

// click events for each button

lightTheme.onclick = () => {
    lightTheme.classList.add("is-active");
    darkTheme.classList.remove("is-active");
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
    localStorage.setItem("theme", "light");
};

darkTheme.onclick = () => {
    darkTheme.classList.add("is-active");
    lightTheme.classList.remove("is-active");
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    localStorage.setItem("theme", "dark");
};

// <- ROOM LISTINGS ======================================== ->

// make each container div select it's child radio button

const roomListings = document.querySelectorAll(".room_listing");

roomListings.forEach((room) => {
    room.addEventListener("click", (e) => {
        const checkBox = e.target.querySelector(".checkbox");
        checkBox.checked = true;
    });
});

// <- COPY URL TO CLIPBOARD ======================================== ->

const link = document.querySelector("#room_link_text");
const icon = document.querySelector(".room_link").querySelector("i");

const copyToClipboard = () => {
    // grab hidden input in order to call .select()
    // grab the URL and remove query string
    const URL = window.location.href.split("?").shift();
    // set, select, and copy the URL from input value
    link.value = URL;
    link.select();
    document.execCommand("copy");
    // animation icon to show link has been copied
    icon.classList.add("spin");
    // remove animation so it can be started over on next click
    setTimeout(() => {
        icon.classList.remove("spin");
    }, 1000);
};

document.querySelector(".room_link").addEventListener("click", copyToClipboard);

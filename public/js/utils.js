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

// make each container div select it's child checkbox

const roomListings = document.querySelectorAll(".room_listing");

console.log(roomListings);

roomListings.forEach((room) => {
    console.log(room);
    room.addEventListener("click", (e) => {
        const checkBox = e.target.querySelector(".checkbox");
        console.log(checkBox);
        checkBox.checked = true;
    });
});

// <- FORM VALIDATOR ======================================== ->
// add event listener to change/enable 'Join Room' button when ready

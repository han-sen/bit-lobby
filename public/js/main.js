// <- SOCKET.IO FUNCTIONS ======================================== ->

const socket = io();

// DOM elements

const messageForm = document.querySelector("#messageForm");
const messageWrap = document.querySelector(".messages_wrap");
const userList = document.querySelector(".user_list");

// grab userName from our pre-populated form values

const userName = messageForm.elements.userName.value || "Guest";
const roomId = messageForm.elements.id.value;

// emit this back to server for lobby bot greeting

socket.emit("joinRoom", { userName, roomId });

// append new user to our DOMs userlist

const appendUser = (userName, incomingUser) => {
    const li = document.createElement("li");
    li.classList.add("user_list_name");
    // bold our own username, but not others
    userName === incomingUser
        ? (li.innerHTML = `<i class="fas fa-user"></i><strong>${incomingUser}</strong>`)
        : (li.innerHTML = `<i class="fas fa-user"></i>${incomingUser}`);
    // set data attribute so we can target it for removal
    li.setAttribute("data-name", incomingUser);
    // add li to userlist
    userList.appendChild(li);
};

// listen for addUser event

socket.on("addUser", (incomingUser) => {
    appendUser(userName, incomingUser);
});

// remove user from userlist in DOM

const removeUser = (exitingUser) => {
    const listItemToRemove = document.querySelector(
        `[data-name=${exitingUser}]`
    );
    userList.removeChild(listItemToRemove);
};

// listen for remove user event

socket.on("removeUser", (exitingUser) => {
    removeUser(exitingUser);
});

// listen for new messages

socket.on("message", (message) => {
    appendMessage(message);
    // scroll chat wrap to bottom on each new message
    messageWrap.scrollTop = messageWrap.scrollHeight;
});

// listen for when user has submitted message form

messageForm.addEventListener("submit", (e) => {
    // stop the form from redirecting
    e.preventDefault();
    // extract values from form submit
    const roomId = e.target.elements.id.value;
    const userName = e.target.elements.userName.value || "Guest";
    const message = e.target.elements.text.value;
    // construct them into our message schema
    const messagePayload = {
        userName: userName,
        text: message,
        createdAt: Date.now(),
    };
    // emit message to server
    socket.emit("chatMessage", roomId, messagePayload);
    // reset the message input
    e.target.elements.text.value = "";
    e.target.elements.text.focus();
});

// function to live append the message to the DOM

const appendMessage = (messagePayload) => {
    // build a new chat message to append to DOM
    const li = document.createElement("li");
    // if its lobby bot, add a class so we can change color
    messagePayload.userName === "Lobby Bot" && li.classList.add("lobby-bot");
    // construct the new message for the DOM
    li.classList.add("slide-in");
    li.innerHTML = `<p class="message_name">
            ${messagePayload.userName}
            <span class="message_time">
                ${messagePayload.createdAt}
            </span>
        </p>
        <p class="message_text">${messagePayload.text}</p>`;
    // add new li to the message ul
    document.querySelector("#message_list").appendChild(li);
};

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

icon &&
    document
        .querySelector(".room_link")
        .addEventListener("click", copyToClipboard);

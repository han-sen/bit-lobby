// <- SOCKET.IO FUNCTIONS ======================================== ->

const socket = io();
const messageForm = document.querySelector("#messageForm");
const messageWrap = document.querySelector(".messages_wrap");
const userList = document.querySelector(".user_list");

// grab userName from our pre-populated form input
const userName = messageForm.elements.userName.value || "Guest";
const roomId = messageForm.elements.id.value;

// emit this back to server for lobby bot
socket.emit("joinRoom", { userName, roomId });

// append new user to our DOMs userlist
const appendUser = (userName, incomingUser) => {
    const li = document.createElement("li");
    li.classList.add("user_list_name");
    // bold our own username, but not others
    userName === incomingUser
        ? (li.innerHTML = `<i class="fas fa-user"></i><strong>${incomingUser}</strong>`)
        : (li.innerHTML = `<i class="fas fa-user"></i>${incomingUser}`);
    userList.appendChild(li);
};

// listen for addUser event
socket.on("addUser", (incomingUser) => {
    console.log("addUser triggered on client side");
    appendUser(userName, incomingUser);
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

// in addition to submitting to our DB
// we need to immediately append the message to the DOM

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

// <- SOCKET.IO FUNCTIONS ======================================== ->
const socket = io();
// const moment = require("moment");
const messageForm = document.querySelector("#messageForm");
const messageWrap = document.querySelector(".messages_wrap");

socket.on("message", (message) => {
    appendMessage(message);
    // scroll chat wrap to bottom
    messageWrap.scrollTop = messageWrap.scrollHeight;
});

// listen for when user has submitted join room form
messageForm.addEventListener("submit", (e) => {
    // stop the form from redirecting
    e.preventDefault();
    // extract variables form submit
    const roomId = e.target.elements.id.value;
    const userName = e.target.elements.userName.value || "Guest";
    const message = e.target.elements.text.value;
    // construct them into our data schema
    const messagePayload = {
        userName: userName,
        text: message,
        createdAt: Date.now(),
    };
    // emit message to server
    socket.emit("chatMessage", roomId, messagePayload);
    // reset the message input
    e.target.elements.text.value = "";
});

// in addition to submitting to our DB
// we need to immediately append the message to the DOM
const appendMessage = (messagePayload) => {
    // build a new chat message to append to DOM
    const li = document.createElement("li");
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

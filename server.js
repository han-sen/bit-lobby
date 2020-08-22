// <- DEPENDENCIES ================================ ->

const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");
const methodOverride = require("method-override");
const moment = require("moment");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

// <- DATA ======================================== ->

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
db.on("open", () => {
    console.log("* __Connection Open__ *");
});
const Message = require("./models/message");
const Rooms = require("./models/rooms");

// <- MIDDLEWARE ================================== ->

app.use(express.urlencoded({ extended: false })); //req.body
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// <- ROUTES ====================================== ->

const roomsController = require("./controllers/roomsController.js");
app.use("/", roomsController);

// <- UTILS ====================================== ->

// function to push new messages to their associated room
const addMessage = (roomId, message) => {
    // first we create a new message
    return Message.create(message).then((newMessage) => {
        // then we chain on a room-lookup by id and push ref to messages array
        return Rooms.findByIdAndUpdate(
            roomId,
            { $push: { messages: newMessage._id } },
            { new: true, useFindAndModify: false }
        );
    });
};

// // Add Message
// app.post("/messages", (req, res) => {
//     addMessage(req.body.id, {
//         userName: req.body.userName || "Guest",
//         text: req.body.text,
//         createdAt: Date.now(),
//     });
// });

// <- WEBSOCKETS ====================================== ->

io.on("connection", (socket) => {
    console.log("new WS connection");

    // welcomes new user
    socket.emit("message", {
        userName: "Lobby Bot",
        text: "Welcome to the room",
        createdAt: moment(Date.now()).format("h:mm a"),
    });

    // announces new user to others
    socket.broadcast.emit("message", {
        userName: "Lobby Bot",
        text: "A new user has joined the chat",
        createdAt: moment(Date.now()).format("h:mm a"),
    });

    // notifies of a user leaving
    socket.on("disconnect", () => {
        // io.emit will emit to everybody
        io.emit("message", {
            userName: "Lobby Bot",
            text: "A user has exited the chat",
            createdAt: moment(Date.now()).format("h:mm a"),
        });
    });

    // listen for chat message
    socket.on("chatMessage", (roomId, message) => {
        console.log(message);
        addMessage(roomId, message);
        io.emit("message", message);
    });
});

// <- LISTENER ====================================== ->

server.listen(PORT, () => {
    console.log(`Coming to you live on port: ${PORT}`);
});

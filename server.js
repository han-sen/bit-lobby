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

// push new messages to their associated room

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

// push new users to the room list

const addUser = (roomId, userName) => {
    console.log(`adding ${userName} to ${roomId}`);
    Rooms.findByIdAndUpdate(
        roomId,
        { $push: { users: userName } },
        { new: true, useFindAndModify: false }
    );
};

// remove user from the room list

// format timestamps

const formatTime = (time) => {
    return moment(time).format("h:mm a");
};

// <- WEBSOCKETS ====================================== ->

io.on("connection", (socket) => {
    console.log("<_ new socket connection _>");

    socket.on("joinRoom", (user) => {
        // set user to current room
        socket.join(user.roomId);
        addUser(user.roomId, user.userName);

        // welcomes new user
        socket.emit("message", {
            userName: "Lobby Bot",
            text: `Welcome to the room <strong>${user.userName}</strong>`,
            createdAt: formatTime(Date.now()),
        });

        // announces new user to others
        socket.broadcast.to(user.roomId).emit("message", {
            userName: "Lobby Bot",
            text: `<strong>${user.userName}</strong> has logged in`,
            createdAt: formatTime(Date.now()),
        });

        // notifies of a user leaving
        socket.on("disconnect", () => {
            // io.emit will emit to everybody
            io.to(user.roomId).emit("message", {
                userName: "Lobby Bot",
                text: `<strong>${user.userName}</strong> has logged off`,
                createdAt: formatTime(Date.now()),
            });
        });

        // listen for chat message
        socket.on("chatMessage", (roomId, message) => {
            message.createdAt = formatTime(message.createdAt);
            console.log(message);
            addMessage(roomId, message);
            io.to(user.roomId).emit("message", message);
        });
    });
});

// <- LISTENER ====================================== ->

server.listen(PORT, () => {
    console.log(`Coming to you live on port: ${PORT}`);
});

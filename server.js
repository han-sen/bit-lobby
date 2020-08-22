// <- DEPENDENCIES ================================ ->

const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");
const methodOverride = require("method-override");
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

// Add Message
app.post("/messages", (req, res) => {
    addMessage(req.body.id, {
        userName: req.body.userName || "Guest",
        text: req.body.text,
        createdAt: Date.now(),
    });
    // this is a hacky placeholder because by the time we call redirect the addMessage operation hasn't finished
    // need to make this async
    setTimeout(() => {
        res.redirect(`/${req.body.id}`);
    }, 1000);
});

// <- WEBSOCKETS ====================================== ->

io.on("connection", (socket) => {
    console.log("new WS connection");
});

// we need to use websockets to append each new message to the chat window
// every time addMessage is called, without having to refresh

// <- LISTENER ====================================== ->

server.listen(PORT, () => {
    console.log(`Coming to you live on port: ${PORT}`);
});

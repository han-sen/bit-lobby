// <- DEPENDENCIES ================================ ->

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// <- DATA ======================================== ->

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
db.on("open", () => {
    console.log("* Connection Open! *");
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
const addMessage = (roomId, comment) => {
    // first we create a new message
    return Message.create(comment).then((newComment) => {
        console.log(newComment);
        // then we chain on a room-lookup by id and push to messages array
        return Rooms.findByIdAndUpdate(
            roomId,
            { $push: { messages: newComment._id } },
            { new: true, useFindAndModify: false }
        );
    });
};

const populateMessages = (id) => {
    return Rooms.findById(id).populate("messages");
};

addMessage("5f3efeef19e9dec5af0d4436", {
    userName: "Mike",
    text: "Checkin out the JS room",
    createdAt: Date.now(),
});

// <- WEBSOCKETS ====================================== ->

// we need to create a new message object on each submit
// we need to grab the id from the current room
// and push a reference to that in each message

// <- LISTENER ====================================== ->

app.listen(PORT, () => {
    console.log(`Coming to you live on port: ${PORT}`);
});

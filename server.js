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
const Rooms = require("./models/rooms");
const roomSeed = require("./models/roomSeed");

// <- MIDDLEWARE ================================== ->

app.use(express.urlencoded({ extended: false })); //req.body
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// <- ROUTES ====================================== ->

// SEED DB
app.get("/seed", (req, res) => {
    Rooms.deleteMany({}, () => {});
    Rooms.create(roomSeed, (error, data) => {
        error ? res.status(400).json(error) : res.redirect("/");
    });
});

// INDEX / HOME
// serve the list of available public chat rooms
app.get("/", (req, res) => {
    Rooms.find({}, (error, roomList) => {
        error
            ? res.send(error.message)
            : res.render("Index", { rooms: roomList });
    });
});

// NEW
app.get("/new", (req, res) => {
    res.render("New");
});

// Delete
app.delete("/:id", (req, res) => {
    Rooms.findByIdAndRemove(req.params.id, (error, deletedRoom) => {
        error ? res.send(error.message) : res.redirect("/");
    });
});

// Create
app.post("/", (req, res) => {
    req.body.privateRoom = req.body.privateRoom === "on" ? true : false;
    Rooms.create(req.body, (error, newRoom) => {
        error ? res.send(error.message) : res.redirect(`/${newRoom._id}`);
    });
});

// EDIT
app.get("/:id/edit", (req, res) => {
    Rooms.findById(req.params.id, (error, foundRoom) => {
        error
            ? res.send(message.error)
            : res.render("Edit", {
                  room: foundRoom,
              });
    });
});

// Put
app.put("/:id", (req, res) => {
    req.body.privateRoom = req.body.privateRoom === "on" ? true : false;
    Rooms.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedRoom) => {
            error ? res.send(error.message) : res.redirect(`/${req.params.id}`);
        }
    );
});

// SHOW
// serve the selected chat room
app.get("/:id", (req, res) => {
    Rooms.findById(req.params.id, (error, foundRoom) => {
        error
            ? res.send(error.message)
            : res.render("Show", {
                  room: foundRoom,
              });
    });
});

app.listen(PORT, () => {
    console.log(`Coming to you live on port: ${PORT}`);
});

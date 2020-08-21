const express = require("express");
const router = express.Router();
const Rooms = require("../models/rooms.js");
const roomSeed = require("../models/roomSeed.js");
const Message = require("../models/message.js");

// SEED DB
router.get("/seed", (req, res) => {
    Rooms.deleteMany({}, () => {});
    Rooms.create(roomSeed, (error, data) => {
        error ? res.status(400).json(error) : res.redirect("/");
    });
});

// INDEX / HOME
// serve the list of available public chat rooms
router.get("/", (req, res) => {
    Rooms.find({}, (error, roomList) => {
        error
            ? res.send(error.message)
            : res.render("Index", { rooms: roomList });
    });
});

// NEW
router.get("/new", (req, res) => {
    res.render("New");
});

// Delete
router.delete("/:id", (req, res) => {
    Rooms.findByIdAndRemove(req.params.id, (error, deletedRoom) => {
        error ? res.send(error.message) : res.redirect("/");
    });
});

// Create Room
router.post("/", (req, res) => {
    req.body.privateRoom = req.body.privateRoom === "on" ? true : false;
    Rooms.create(req.body, (error, newRoom) => {
        error ? res.send(error.message) : res.redirect(`/${newRoom._id}`);
    });
});

// EDIT
router.get("/:id/edit", (req, res) => {
    Rooms.findById(req.params.id, (error, foundRoom) => {
        error
            ? res.send(message.error)
            : res.render("Edit", {
                  room: foundRoom,
              });
    });
});

// Put
router.put("/:id", (req, res) => {
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
router.get("/:id", (req, res) => {
    Rooms.findOne({ _id: req.params.id })
        // after we find room, we need to hyrdate/populate the document's messages
        .populate("messages")
        .exec((error, roomWithMessages) => {
            error
                ? res.send(error.message)
                : res.render("Show", {
                      room: roomWithMessages,
                  });
        });
});

module.exports = router;

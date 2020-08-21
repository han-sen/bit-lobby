const express = require("express");
const url = require("url");
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
router.get("/", (req, res) => {
    // if submitting index form to join room
    req.query.room
        ? res.redirect(`/${req.query.room}&userName=${req.query.userName}`)
        : // else render index page
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

// DELETE
router.delete("/:id", (req, res) => {
    Rooms.findByIdAndRemove(req.params.id, (error, deletedRoom) => {
        error ? res.send(error.message) : res.redirect("/");
    });
});

// UPDATE
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

// CREATE
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

// SHOW
router.get("/:id", (req, res) => {
    const roomId = req.url.split("&").shift().slice(1);
    const userName = req.url.split("=").pop();
    Rooms.findOne({ _id: roomId })
        // after we find room, we need to hyrdate/populate the document's messages
        .populate("messages")
        .exec((error, roomWithMessages) => {
            error
                ? res.send(error.message)
                : res.render("Show", {
                      room: roomWithMessages,
                      userName: userName,
                  });
        });
});

module.exports = router;

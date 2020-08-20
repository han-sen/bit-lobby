const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        privateRoom: { type: Boolean, default: false, required: true },
        perma: { type: Boolean, default: false, required: true },
        users: { type: Array, default: [], required: true },
        messages: { type: Array, required: false },
    },
    { timestamps: true }
);

const Rooms = mongoose.model("Room", roomSchema);

module.exports = Rooms;

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, default: "/img/room.png", required: false },
        privateRoom: { type: Boolean, default: false, required: true },
        perma: { type: Boolean, default: false, required: true },
        users: { type: Array, default: ["Lobby Bot"], required: true },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
            },
        ],
    },
    { timestamps: true }
);

const Rooms = mongoose.model("Room", roomSchema);

module.exports = Rooms;

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        private: { type: Boolean, default: false, required: true },
        perma: { type: Boolean, required: true },
    },
    { timestamps: true }
);

const Rooms = mongoose.model("Room", roomSchema);

module.exports = Rooms;

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        room: { type: String, reqired: true },
        name: { type: String, required: true },
        text: { type: String, required: true },
    },
    { timestamps: true }
);

const Messages = mongoose.model("Message", messageSchema);

module.exports = Messages;

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        userName: { type: String, default: "Guest", required: true },
        text: { type: String, required: true },
        createdAt: { type: String, required: true },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

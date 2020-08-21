const { Mongoose } = require("mongoose");

module.exports = [
    {
        name: "javascript",
        description: "All things Ecmascript",
        privateRoom: false,
        perma: true,
        users: ["Lobby Bot", "Nodemon"],
    },
    {
        name: "python",
        description: "All things Python",
        privateRoom: false,
        perma: true,
        users: ["Lobby Bot", "Snake Charmer"],
    },
    {
        name: "goland",
        description: "All things Go",
        privateRoom: false,
        perma: true,
        users: ["Lobby Bot", "Gopher dude"],
    },
];

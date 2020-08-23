const React = require("react");
const Default = require("./components/Default");
const ThemeToggle = require("./components/ThemeToggle");
const RoomSelector = require("./components/RoomSelector");
const Footer = require("./components/Footer");

const Index = (props) => {
    const rooms = props.rooms;
    return (
        <Default page="Bit Lobby">
            <ThemeToggle />
            <div className="content_wrap">
                <h1>Room List</h1>
                <RoomSelector rooms={rooms} />
                <a href="/new">
                    <button className="button">Add a room</button>
                </a>
            </div>
            <Footer />
        </Default>
    );
};

module.exports = Index;

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
            <div className="home_form_wrap fade-in">
                <h1>Room List</h1>
                <RoomSelector rooms={rooms} />
                <a href="/new">
                    <button className="button room_add">Add a room</button>
                </a>
            </div>
            <Footer />
        </Default>
    );
};

module.exports = Index;

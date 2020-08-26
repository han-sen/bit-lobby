const React = require("react");
const Default = require("./components/Default");
const ThemeToggle = require("./components/ThemeToggle");
const Logo = require("./components/Logo");
const RoomSelector = require("./components/RoomSelector");
const Footer = require("./components/Footer");

const Index = (props) => {
    const rooms = props.rooms;
    return (
        <Default page="Bit Lobby">
            <ThemeToggle />
            <div className="home_form_wrap fade-in">
                {/* <img src="/img/bit-lobby-logo.svg" className="bit_logo" /> */}
                <Logo />
                <RoomSelector rooms={rooms} />
                <a href="/new">
                    <button className="button is-primary room_add">
                        <i className="fas fa-cube"></i> Add Room
                    </button>
                </a>
            </div>
            <Footer />
        </Default>
    );
};

module.exports = Index;

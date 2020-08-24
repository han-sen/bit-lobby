const React = require("react");
const Room = require("./components/Room");
const RoomDetails = require("./components/RoomDetails");
const Chat = require("./components/Chat");
const UserList = require("./components/UserList");
const Footer = require("./components/Footer");
const ThemeToggle = require("./components/ThemeToggle");

const Show = (props) => {
    const {
        id,
        name,
        description,
        img,
        privateRoom,
        perma,
        users,
        messages,
    } = props.room;
    const userName = props.userName;
    return (
        <Room page={name}>
            <a href="/">
                <h1>Bit Lobby</h1>
            </a>
            <div className="room_wrap fade-in-up">
                <div className="room_controls">
                    <img className="room_img" src={img} />
                    <RoomDetails
                        name={name}
                        description={description}
                        privateRoom={privateRoom}
                    />
                    {!perma && (
                        <button>
                            <a href={`/${id}/edit`}>Edit</a>
                        </button>
                    )}
                    <UserList users={users} />
                </div>
                <Chat roomId={id} userName={userName} messages={messages} />
                <ThemeToggle />
            </div>
            <Footer />
        </Room>
    );
};

module.exports = Show;

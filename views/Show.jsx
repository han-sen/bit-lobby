const React = require("react");
const Room = require("./components/Room");
const RoomDetails = require("./components/RoomDetails");
const Chat = require("./components/Chat");
const UserList = require("./components/UserList");

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
            <div className="room_wrap">
                <div className="room_controls">
                    <img className="room_img" src={img} />
                    <RoomDetails
                        name={name}
                        description={description}
                        privateRoom={privateRoom}
                    />
                    <UserList users={users} />
                    {!perma && (
                        <button>
                            <a href={`/${id}/edit`}>Edit</a>
                        </button>
                    )}
                </div>
                <Chat roomId={id} userName={userName} messages={messages} />
            </div>
        </Room>
    );
};

module.exports = Show;

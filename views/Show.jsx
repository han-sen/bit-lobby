const React = require("react");
const Room = require("./components/Room");
const Chat = require("./components/Chat");

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
            <div className="room_wrap">
                <div className="room_controls">
                    <img className="room_img" src={img} />
                    <h1>{name}</h1>
                    {privateRoom ? (
                        <li className="room_privacy private">
                            <i className="fas fa-eye-slash"></i>private room
                        </li>
                    ) : (
                        <li className="room_privacy public">
                            <i className="fas fa-eye"></i>public room
                        </li>
                    )}
                    <p className="room_description">{description}</p>
                    <p>Active users:</p>
                    <ul className="user_list">
                        {users.map((user) => (
                            <li key={user}>
                                {user === "Lobby Bot" ? (
                                    <i className="fas fa-database"></i>
                                ) : (
                                    <i className="fas fa-user"></i>
                                )}
                                {user}
                            </li>
                        ))}
                    </ul>
                    <button>
                        <a href="/">Home</a>
                    </button>
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

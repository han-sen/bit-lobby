const React = require("react");
const Default = require("./components/Default");
const Chat = require("./components/Chat");

const Show = (props) => {
    const {
        id,
        name,
        description,
        privateRoom,
        perma,
        users,
        messages,
    } = props.room;
    return (
        <Default page={name}>
            <div className="room_wrap">
                <div className="room_controls">
                    <h1>{name}</h1>
                    <p>{privateRoom ? "Private room" : "Public room"}</p>
                    <p>{description}</p>
                    <p>Active users:</p>
                    <ul>
                        {users.map((user) => (
                            <li key={user}>{user}</li>
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
                <Chat roomId={id} messages={messages} />
            </div>
        </Default>
    );
};

module.exports = Show;

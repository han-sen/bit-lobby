const React = require("react");
const Default = require("./components/Default");
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
    console.log(`at show username is: ${userName}`);
    return (
        <Default page={name}>
            <div className="room_wrap">
                <div className="room_controls">
                    <h1>{name}</h1>
                    <p>{privateRoom ? "Private room" : "Public room"}</p>
                    <p>{description}</p>
                    <img className="room_img" src={img} />
                    <p>Active users:</p>
                    <ul>
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
        </Default>
    );
};

module.exports = Show;

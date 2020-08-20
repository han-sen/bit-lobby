const React = require("react");
const Default = require("./components/Default");
const Chat = require("./components/Chat");

const Show = (props) => {
    const {
        name,
        description,
        privateRoom,
        perma,
        users,
        messages,
    } = props.room;
    return (
        <Default page={name}>
            <div>
                <h1>{name}</h1>
                <p>Active users:</p>
                <ul>
                    {users.map((user) => (
                        <li>{user}</li>
                    ))}
                </ul>
                <p>{privateRoom ? "Private room" : "Public room"}</p>
                <Chat messages={messages} />
                <a href="/">Back to index</a>
            </div>
        </Default>
    );
};

module.exports = Show;

const React = require("react");
const Default = require("./components/Default");
const Chat = require("./components/Chat");
const DeleteButton = require("./components/DeleteButton");

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
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Active users:</p>
                <ul>
                    {users.map((user) => (
                        <li>{user}</li>
                    ))}
                </ul>
                <p>{privateRoom ? "Private room" : "Public room"}</p>
                <Chat messages={messages} />
                <ul>
                    <li>
                        <a href={`/${id}/edit`}>Edit</a>
                    </li>
                    {!privateRoom ? (
                        <li>
                            <DeleteButton id={id}></DeleteButton>
                        </li>
                    ) : (
                        ""
                    )}
                    <li>
                        <a href="/">Back to index</a>
                    </li>
                </ul>
            </div>
        </Default>
    );
};

module.exports = Show;

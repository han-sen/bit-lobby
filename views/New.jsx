const React = require("react");
const Default = require("./components/Default");

const New = () => {
    return (
        <Default page="Create New">
            <div>
                <h2>NEW PAGE</h2>
                <form action="/" method="POST">
                    User Name:{" "}
                    <input
                        type="text"
                        name="userName"
                        required
                        minLength="1"
                        maxLength="16"
                    />
                    <br />
                    Room Name:{" "}
                    <input
                        type="text"
                        name="name"
                        required
                        minLength="1"
                        maxLength="16"
                    />
                    <br />
                    Description:{" "}
                    <input
                        type="text"
                        name="description"
                        required
                        minLength="1"
                        maxLength="32"
                    />
                    <br />
                    Image:{" "}
                    <input
                        type="text"
                        name="img"
                        defaultValue="/img/room.png"
                    />
                    <br />
                    Private:
                    <input type="checkbox" name="privateRoom" />
                    <br />
                    <input type="submit" name="" value="Create Room" />
                </form>
            </div>
        </Default>
    );
};

module.exports = New;

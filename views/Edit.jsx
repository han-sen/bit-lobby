const React = require("react");
const Default = require("./components/Default");
const DeleteButton = require("./components/DeleteButton");

const Edit = (props) => {
    const { id, name, description, privateRoom } = props.room;
    return (
        <Default page="Edit Page">
            <div>
                <h1>Edit Page</h1>
                <form action={`/${id}?_method=PUT`} method="POST">
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
                        defaultValue={name}
                        minLength="1"
                        maxLength="16"
                    />
                    <br />
                    Description:
                    <input
                        type="text"
                        name="description"
                        defaultValue={description}
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
                    <input
                        type="checkbox"
                        name="privateRoom"
                        checked={privateRoom}
                    />
                    <br />
                    <input type="submit" name="" value="Submit Changes" />
                </form>
                <DeleteButton id={id} />
                <a href="/">Back to index</a>
            </div>
        </Default>
    );
};

module.exports = Edit;

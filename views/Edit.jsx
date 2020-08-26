const React = require("react");
const Default = require("./components/Default");
const Logo = require("./components/Logo");
const DeleteButton = require("./components/DeleteButton");
const ThemeToggle = require("./components/ThemeToggle");
const Footer = require("./components/Footer");

const Edit = (props) => {
    const { id, name, description, privateRoom } = props.room;
    const userName = props.userName;
    return (
        <Default page="Edit Page">
            <ThemeToggle />
            <Logo />
            <div className="edit_wrap fade-in">
                <h2>Edit Page</h2>
                <form action={`/${id}?_method=PUT`} method="POST">
                    User Name:{" "}
                    <input
                        type="text"
                        name="userName"
                        className="input"
                        required
                        defaultValue={userName}
                        minLength="1"
                        maxLength="16"
                    />
                    Room Name:{" "}
                    <input
                        type="text"
                        name="name"
                        className="input"
                        defaultValue={name}
                        minLength="1"
                        maxLength="16"
                    />
                    Description:
                    <input
                        type="text"
                        name="description"
                        className="input"
                        defaultValue={description}
                        minLength="1"
                        maxLength="32"
                    />
                    Image:{" "}
                    <input
                        type="text"
                        name="img"
                        className="input"
                        defaultValue="/img/room.png"
                    />
                    <p>
                        Private:
                        <input
                            type="checkbox"
                            name="privateRoom"
                            checked={privateRoom}
                        />
                    </p>
                    <div className="edit_controls_wrap">
                        <button
                            className="controls_edit"
                            type="submit"
                            name=""
                            value="Submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <DeleteButton id={id} />
            </div>
            <Footer />
        </Default>
    );
};

module.exports = Edit;

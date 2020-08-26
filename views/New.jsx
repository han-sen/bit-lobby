const React = require("react");
const Logo = require("./components/Logo");
const Default = require("./components/Default");
const ThemeToggle = require("./components/ThemeToggle");
const Footer = require("./components/Footer");

const New = () => {
    return (
        <Default page="Create New">
            <ThemeToggle />
            <Logo />
            <div className="edit_wrap fade-in">
                <h2>NEW PAGE</h2>
                <form action="/" method="POST">
                    User Name:{" "}
                    <input
                        type="text"
                        name="userName"
                        required
                        minLength="1"
                        maxLength="16"
                        className="input"
                        autoComplete="off"
                    />
                    <br />
                    Room Name:{" "}
                    <input
                        type="text"
                        name="name"
                        required
                        minLength="1"
                        maxLength="16"
                        className="input"
                        autoComplete="off"
                    />
                    <br />
                    Description:{" "}
                    <input
                        type="text"
                        name="description"
                        required
                        minLength="1"
                        maxLength="32"
                        className="input"
                        autoComplete="off"
                    />
                    <br />
                    Image:{" "}
                    <input
                        type="text"
                        name="img"
                        defaultValue="/img/room.png"
                        className="input"
                    />
                    <br />
                    Private:
                    <input
                        type="checkbox"
                        name="privateRoom"
                        className="checkbox"
                    />
                    <br />
                    <input
                        className="button is-primary"
                        type="submit"
                        name=""
                        value="Create Room"
                    />
                </form>
            </div>
            <Footer />
        </Default>
    );
};

module.exports = New;

const React = require("react");

const SignIn = () => {
    return (
        <form id="userNameForm">
            <label htmlFor="userName">User Name:</label>
            <input
                type="text"
                id="userNameInput"
                name="userName"
                placeholder="pick a name"
                required
            />
            <input type="submit" id="userNameSubmit" defaultValue="Set" />
        </form>
    );
};

module.exports = SignIn;

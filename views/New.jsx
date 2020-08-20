const React = require("react");
const Default = require("./components/Default");

const New = () => {
    return (
        <Default page="Create New">
            <div>
                <h2>NEW PAGE</h2>
                <form action="/" method="POST">
                    Name: <input type="text" name="name" />
                    <br />
                    Description: <input type="text" name="description" />
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

const React = require("react");
const Default = require("./components/Default");

const Edit = (props) => {
    const { id, name, description, privateRoom } = props.room;
    return (
        <Default page="Edit Page">
            <div>
                <h1>Edit Page</h1>
                <form action={`/${id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} />
                    <br />
                    Description:
                    <input
                        type="text"
                        name="description"
                        defaultValue={description}
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
                <a href="/">Back to index</a>
            </div>
        </Default>
    );
};

module.exports = Edit;

const React = require("react");

const DeleteButton = (props) => {
    return (
        <form action={`/${props.id}?_method=DELETE`} method="POST">
            <button className="controls_delete" type="submit" value="DELETE">
                Delete
            </button>
        </form>
    );
};

module.exports = DeleteButton;

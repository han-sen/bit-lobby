const React = require("react");

const DeleteButton = (props) => {
    return (
        <form action={`/${props.id}?_method=DELETE`} method="POST">
            <button className="button is-danger" type="submit" value="DELETE">
                Delete Room
            </button>
        </form>
    );
};

module.exports = DeleteButton;

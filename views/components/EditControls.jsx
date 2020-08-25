const React = require("react");
const DeleteButton = require("./DeleteButton");

const EditControls = (props) => {
    return (
        <div className="edit_controls_wrap">
            <a href={`/${props.id}/edit`}>
                <button className="controls_edit">Edit</button>
            </a>
            <DeleteButton id={props.id} />
        </div>
    );
};

module.exports = EditControls;

const React = require("react");

const MessageInput = (props) => {
    return (
        <div className="input_wrap">
            <form action="/messages" method="POST">
                <input
                    type="text"
                    name="id"
                    defaultValue={props.roomId}
                    hidden
                />
                <input tyoe="text" name="userName" defaultValue="Test" hidden />
                <input type="text" name="text" placeholder="Start typing..." />
                <input type="submit" name="" defaultValue="Send" />
            </form>
        </div>
    );
};

module.exports = MessageInput;

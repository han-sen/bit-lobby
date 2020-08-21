const React = require("react");

const MessageInput = (props) => {
    const { userName, roomId } = props;
    return (
        <div className="input_wrap">
            <form action="/messages" method="POST">
                <input type="text" name="id" defaultValue={roomId} hidden />
                <input type="text" name={userName} hidden />
                <input type="text" name="text" placeholder="Start typing..." />
                <input type="submit" name="" defaultValue="Send" />
            </form>
        </div>
    );
};

module.exports = MessageInput;

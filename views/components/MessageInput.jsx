const React = require("react");

const MessageInput = (props) => {
    const { userName, roomId } = props;
    return (
        <div className="input_wrap">
            <form id="messageForm">
                <input type="text" name="id" defaultValue={roomId} hidden />
                <input
                    type="text"
                    name="userName"
                    defaultValue={userName}
                    hidden
                />
                <input
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Start typing..."
                    required
                    autoComplete="off"
                />
                <button type="submit" className="button">
                    <i className="fas fa-paper-plane"></i>{" "}
                    <span className="send_label">Send</span>
                </button>
            </form>
        </div>
    );
};

module.exports = MessageInput;

const React = require("react");
const MessageInput = require("./MessageInput");

const Chat = (props) => {
    const { roomId, userName, messages } = props;
    return (
        <div className="chat_wrap">
            <div className="messages_wrap">
                <ul id="message_list">
                    {messages.map((message, i) => {
                        return (
                            <li key={i}>
                                <p className="message_name">
                                    {message.userName}
                                    <span className="message_time">
                                        {message.createdAt}
                                    </span>
                                </p>
                                <p className="message_text"> {message.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <MessageInput userName={userName} roomId={roomId} />
        </div>
    );
};

module.exports = Chat;

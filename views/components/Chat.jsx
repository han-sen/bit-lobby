const React = require("react");

const Chat = (props) => {
    const messages = props.messages;
    return (
        <div className="chat_wrap">
            <div className="messages_wrap">
                <ul>
                    {messages.map((message) => {
                        return (
                            <li>
                                {message.name}: {message.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="input_wrap">
                <input type="text" placeholder="Start typing..."></input>
            </div>
        </div>
    );
};

module.exports = Chat;

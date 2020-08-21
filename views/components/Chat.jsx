const React = require("react");
const moment = require("moment");

const Chat = (props) => {
    const { roomId, messages } = props;
    console.log(roomId);
    return (
        <div className="chat_wrap">
            <div className="messages_wrap">
                <ul>
                    {messages.map((message) => {
                        return (
                            <li>
                                <p className="message_name">
                                    {message.userName}
                                    <span className="message_time">
                                        {moment(message.createdAt).format(
                                            "h:mm a"
                                        )}
                                    </span>
                                </p>
                                <p className="message_text"> {message.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="input_wrap">
                <form action="/messages" method="POST">
                    <input type="text" name="id" value={roomId} hidden />
                    <input tyoe="text" name="userName" value="Test" hidden />
                    <input
                        type="text"
                        name="text"
                        placeholder="Start typing..."
                    />
                    <input type="submit" name="" value="Send" />
                </form>
            </div>
        </div>
    );
};

module.exports = Chat;

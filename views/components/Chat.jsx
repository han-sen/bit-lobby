const React = require("react");

const Chat = (props) => {
    const messages = props.messages;
    return <div className="chat_wrap">{messages.map((message) => {})}</div>;
};

module.exports = Chat;

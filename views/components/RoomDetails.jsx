const React = require("react");

const RoomDetails = (props) => {
    const { name, description, privateRoom } = props;
    return (
        <div className="room_details_wrap">
            <h1 className="room_name">{name}</h1>
            {privateRoom ? (
                <li className="room_privacy private">
                    <i className="fas fa-eye-slash"></i>private room
                </li>
            ) : (
                <li className="room_privacy public">
                    <i className="fas fa-eye"></i>public room
                </li>
            )}
            <p className="room_description">{description}</p>
        </div>
    );
};

module.exports = RoomDetails;

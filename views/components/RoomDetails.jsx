const React = require("react");

const RoomDetails = (props) => {
    const { name, description, privateRoom } = props;
    return (
        <div className="room_details_wrap">
            <h2 className="room_name">
                {name}{" "}
                <span className="room_link">
                    <i class="fas fa-link"></i>
                    <input type="text" id="room_link_text" />
                </span>
            </h2>
            {privateRoom ? (
                <li className="room_privacy private">
                    <i class="fas fa-ghost"></i>private room
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

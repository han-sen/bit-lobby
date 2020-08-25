const React = require("react");

const RoomSelector = (props) => {
    const rooms = props.rooms;
    return (
        <div className="room_list_wrap">
            <form action="/" method="GET" id="roomSelect">
                <div className="room_user_name">
                    <label>User Name: </label>
                    <input
                        type="text"
                        name="userName"
                        className="input"
                        required
                        minLength="1"
                        maxLength="16"
                        autoComplete="off"
                    />
                </div>
                <div className="room_listing_wrap">
                    {rooms
                        .filter((room) => !room.privateRoom)
                        .map((room) => {
                            return (
                                <div className="room_listing" key={room._id}>
                                    <div className="room_grid">
                                        <input
                                            type="radio"
                                            name="room"
                                            className="checkbox"
                                            defaultValue={room._id}
                                        />
                                    </div>
                                    <div className="room_grid">
                                        <p> {room.name}</p>
                                    </div>
                                    <div className="room_grid">
                                        <p>
                                            {room.users.length}
                                            <i className="fas fa-user"></i>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <button className="button is-primary" type="submit">
                    JOIN
                </button>
            </form>
        </div>
    );
};

module.exports = RoomSelector;

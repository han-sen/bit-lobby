const React = require("react");
const Default = require("./components/Default");

const Index = (props) => {
    const rooms = props.rooms;
    return (
        <Default page="Bit Lobby">
            <div className="content_wrap">
                <h1>Room List</h1>
                <div className="room_list_wrap">
                    <form action="/" method="GET">
                        <div className="room_listing">
                            <label>User Name: </label>
                            <input type="text" name="userName" required />
                        </div>
                        {rooms
                            .filter((room) => !room.privateRoom)
                            .map((room) => {
                                return (
                                    <div
                                        className="room_listing"
                                        key={room._id}
                                    >
                                        <div className="room_grid">
                                            <input
                                                type="radio"
                                                name="room"
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
                        <button className="button is-primary" type="submit">
                            JOIN
                        </button>
                    </form>
                </div>
                <a href="/new">Add a room</a>
            </div>
        </Default>
    );
};

module.exports = Index;

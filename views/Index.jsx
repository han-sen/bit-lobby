const React = require("react");
const Default = require("./components/Default");

const Index = (props) => {
    const rooms = props.rooms;
    return (
        <Default page="Bit Lobby">
            <div className="content_wrap">
                <h1>Room List</h1>
                <div className="room_list_wrap">
                    {rooms
                        .filter((room) => !room.privateRoom)
                        .map((room) => {
                            return (
                                <div className="room_listing" key={room._id}>
                                    <p>
                                        <a href={room._id}>{room.name}</a>
                                    </p>
                                    <p>{room.description}</p>
                                    <p>Users: {room.users.length}</p>
                                    <hr></hr>
                                </div>
                            );
                        })}
                </div>
                <a href="/new">Add a room</a>
            </div>
        </Default>
    );
};

module.exports = Index;

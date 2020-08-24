const React = require("react");

const UserList = (props) => {
    return (
        <div className="user_list_wrap">
            <p className="user_list_header">Active Users:</p>
            <ul className="user_list">
                {props.users.map((user) => (
                    <li className="user_list_name" key={user} data-name={user}>
                        {user === "Lobby Bot" ? (
                            <i className="fas fa-database"></i>
                        ) : (
                            <i className="fas fa-user"></i>
                        )}
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

module.exports = UserList;

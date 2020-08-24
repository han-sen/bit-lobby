const React = require("react");

const ThemeToggle = () => {
    return (
        <div className="theme_wrap fade-in">
            <button id="lightTheme">
                <i className="fas fa-sun"></i>
            </button>
            <button id="darkTheme">
                <i className="fas fa-star"></i>
            </button>
        </div>
    );
};

module.exports = ThemeToggle;

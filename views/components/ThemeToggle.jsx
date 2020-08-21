const React = require("react");

const ThemeToggle = () => {
    return (
        <div className="theme_wrap">
            <button id="lightTheme">Light</button>
            <button id="darkTheme">Dark</button>
        </div>
    );
};

module.exports = ThemeToggle;

const React = require("react");

const ThemeToggle = () => {
    return (
        <div className="theme_wrap">
            <button className="is-active" id="lightTheme">
                <i class="fas fa-sun"></i>
            </button>
            <button id="darkTheme">
                <i className="fas fa-star"></i>
            </button>
        </div>
    );
};

module.exports = ThemeToggle;

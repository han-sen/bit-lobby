const React = require("react");
const ThemeToggle = require("./ThemeToggle");

const Default = (props) => {
    return (
        <html>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{props.page}</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/css/style.css"
                ></link>
            </head>
            <body>
                <ThemeToggle />
                <div className="page_wrap">{props.children}</div>
                <script src="/js/main.js"></script>
            </body>
        </html>
    );
};

module.exports = Default;

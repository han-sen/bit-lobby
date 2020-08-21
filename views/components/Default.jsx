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
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/css/style.css"
                ></link>
                <script
                    src="https://kit.fontawesome.com/8050e0389d.js"
                    crossOrigin="anonymous"
                    defer
                ></script>
            </head>
            <body>
                <ThemeToggle />
                <div className="page_wrap">{props.children}</div>
                <script src="/js/utils.js"></script>
            </body>
        </html>
    );
};

module.exports = Default;

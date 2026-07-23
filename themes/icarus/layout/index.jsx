const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        // 直接重定向到欢迎页
        return (
            <html>
                <head>
                    <meta http-equiv="refresh" content="0; url=/welcome.html" />
                </head>
                <body></body>
            </html>
        );
    }
};
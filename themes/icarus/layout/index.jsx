const { Component } = require('inferno');
const classname = require('hexo-component-inferno/lib/util/classname');
const Pagination = require('hexo-component-inferno/lib/view/widget/pagination');
const ArticleList = require('./common/article-list');
const Sidebar = require('./common/sidebar');

module.exports = class extends Component {
    render() {
        const { site, config, page, helper, widgets } = this.props;
        const { __, url_for } = helper;

        // ==========================================
        // 只对首页重定向到 /welcome.html
        // ==========================================
        if (page.path === '' || page.path === 'index.html' || page.path === '/') {
            return (
                <html>
                    <head>
                        <meta http-equiv="refresh" content="0; url=/welcome.html" />
                    </head>
                    <body></body>
                </html>
            );
        }

        // ==========================================
        // 其他页面正常渲染
        // ==========================================
        const hasSidebar = Array.isArray(widgets) && widgets.length > 0;
        const columnClasses = classname({
            'column': true,
            'is-8-tablet': hasSidebar,
            'is-8-desktop': hasSidebar,
            'is-8-widescreen': hasSidebar,
            'is-12-tablet': !hasSidebar,
            'is-12-desktop': !hasSidebar,
            'is-12-widescreen': !hasSidebar,
            'order-2': hasSidebar,
            'column-main': true
        });

        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className={columnClasses}>
                            <ArticleList
                                site={site}
                                config={config}
                                page={page}
                                helper={helper}
                            />
                            <Pagination
                                config={config}
                                page={page}
                                helper={helper}
                            />
                        </div>
                        {hasSidebar ? (
                            <div className="column is-4-tablet is-4-desktop is-4-widescreen order-1 column-left">
                                <Sidebar
                                    site={site}
                                    config={config}
                                    page={page}
                                    helper={helper}
                                    widgets={widgets}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        );
    }
};
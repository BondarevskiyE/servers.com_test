"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var Header_1 = require("./components/Header");
var Routes_1 = require("./Routes");
require("./App.scss");
var mapStateToProps = function () { return ({}); };
var mapDispatchToProps = {
    loadPosts: store_1.loadPosts
};
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
function App(_a) {
    var loadPosts = _a.loadPosts;
    react_1.useEffect(function () {
        loadPosts();
    }, [loadPosts]);
    return (react_1["default"].createElement(react_router_dom_1.HashRouter, null,
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement("div", { className: "main" },
            react_1["default"].createElement(Routes_1["default"], null))));
}
exports["default"] = connector(App);

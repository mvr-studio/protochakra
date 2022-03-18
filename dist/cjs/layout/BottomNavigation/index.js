"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
var BottomNavigation = function (_a) {
    var tabs = _a.tabs, onChange = _a.onChange, padding = _a.padding, containerProps = _a.containerProps, tabProps = _a.tabProps;
    return ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ padding: '0.5rem 1rem 0.75rem' || padding, "data-testid": "protochakra.bottomNavigation" }, containerProps, { children: (0, jsx_runtime_1.jsx)(react_1.HStack, __assign({ justify: "space-around" }, { children: tabs.map(function (tab) { return ((0, jsx_runtime_1.jsxs)(react_1.Stack, __assign({ justifyContent: "center", alignItems: "center", cursor: "pointer", onClick: function () { return (tab.onChangeOverride ? tab.onChangeOverride(tab.pathname) : onChange(tab.pathname)); } }, tabProps, { children: [(0, jsx_runtime_1.jsx)(react_1.Icon, { as: tab.Icon || icons_1.QuestionOutlineIcon, boxSize: "1.5rem" }), (0, jsx_runtime_1.jsx)(react_1.Text, __assign({ fontSize: "0.75rem", lineHeight: 0.5 }, { children: tab.label }))] }))); }) })) })));
};
exports.default = BottomNavigation;

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var hamburger_react_1 = require("hamburger-react");
var Navbar = function (_a) {
    var branding = _a.branding, children = _a.children, maxWidth = _a.maxWidth, containerProps = __rest(_a, ["branding", "children", "maxWidth"]);
    var _b = (0, react_1.useState)(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var toggleExpanded = function () { return setIsExpanded(!isExpanded); };
    var mobileDisplay = isExpanded ? 'flex' : 'none';
    return ((0, jsx_runtime_1.jsx)(react_2.Box, __assign({ paddingY: "0.5rem" }, containerProps, { children: (0, jsx_runtime_1.jsx)(react_2.Container, __assign({ maxWidth: maxWidth || 'container.xl' }, { children: (0, jsx_runtime_1.jsxs)(react_2.Flex, __assign({ display: ['block', 'block', 'flex'], justify: "space-between", align: "center" }, { children: [(0, jsx_runtime_1.jsxs)(react_2.Flex, __assign({ justify: "space-between", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Box, __assign({ fontWeight: 700, fontSize: "1.5rem", "data-testid": "protochakra.navbar.branding" }, { children: branding }), void 0), (0, jsx_runtime_1.jsx)(react_2.Box, __assign({ display: ['block', 'block', 'none'], "data-testid": "protochakra.navbar.toggle" }, { children: (0, jsx_runtime_1.jsx)(hamburger_react_1.Slant, { toggled: isExpanded, toggle: toggleExpanded, size: 28 }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(react_2.HStack, __assign({ display: [mobileDisplay, mobileDisplay, 'flex'], marginTop: ['1rem', '1rem', 0], flexDirection: ['column', 'column', 'row'], gridGap: "1.5rem" }, { children: children }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.default = Navbar;

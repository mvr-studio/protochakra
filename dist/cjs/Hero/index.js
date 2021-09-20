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
var react_1 = require("@chakra-ui/react");
var Hero = function (_a) {
    var maxWidth = _a.maxWidth, heading = _a.heading, content = _a.content, Addons = _a.Addons, children = _a.children, containerProps = __rest(_a, ["maxWidth", "heading", "content", "Addons", "children"]);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({}, containerProps, { children: (0, jsx_runtime_1.jsx)(react_1.Container, __assign({ maxWidth: maxWidth || 'container.xl' }, { children: (0, jsx_runtime_1.jsxs)(react_1.SimpleGrid, __assign({ columns: [1, 1, 2], gridGap: "2rem" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Center, __assign({ flexDirection: "column", alignItems: "flex-start" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Heading, __assign({ size: "lg", "data-testid": "protochakra.hero.heading" }, { children: heading }), void 0), (0, jsx_runtime_1.jsx)(react_1.Text, __assign({ lineHeight: "1.75", marginTop: "1rem", "data-testid": "protochakra.hero.content" }, { children: content }), void 0), Addons && ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ marginTop: "1rem", "data-testid": "protochakra.hero.addons" }, { children: (0, jsx_runtime_1.jsx)(Addons, {}, void 0) }), void 0))] }), void 0), (0, jsx_runtime_1.jsx)(react_1.Center, __assign({ display: ['none', 'none', 'flex'], "data-testid": "protochakra.hero.media" }, { children: children }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.default = Hero;

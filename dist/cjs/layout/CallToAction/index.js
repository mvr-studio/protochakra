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
var CallToAction = function (_a) {
    var heading = _a.heading, description = _a.description, children = _a.children, maxWidth = _a.maxWidth, containerProps = __rest(_a, ["heading", "description", "children", "maxWidth"]);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, __assign({ paddingY: "2rem", "data-testid": "protochakra.cta" }, containerProps, { children: (0, jsx_runtime_1.jsx)(react_1.Container, __assign({ maxWidth: maxWidth || 'container.xl' }, { children: (0, jsx_runtime_1.jsxs)(react_1.Flex, __assign({ justify: "space-between", align: "center" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(react_1.Heading, __assign({ size: "lg", "data-testid": "protochakra.cta.heading" }, { children: heading }), void 0), description && ((0, jsx_runtime_1.jsx)(react_1.Text, __assign({ marginTop: "1rem", "data-testid": "protochakra.cta.description" }, { children: description }), void 0))] }, void 0), (0, jsx_runtime_1.jsx)(react_1.Box, __assign({ "data-testid": "protochakra.cta.addons" }, { children: children }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.default = CallToAction;

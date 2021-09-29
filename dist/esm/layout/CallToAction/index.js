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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Box, Heading, Text, Container } from '@chakra-ui/react';
var CallToAction = function (_a) {
    var heading = _a.heading, description = _a.description, children = _a.children, maxWidth = _a.maxWidth, containerProps = __rest(_a, ["heading", "description", "children", "maxWidth"]);
    return (_jsx(Box, __assign({ paddingY: "2rem", "data-testid": "protochakra.cta" }, containerProps, { children: _jsx(Container, __assign({ maxWidth: maxWidth || 'container.xl' }, { children: _jsxs(Flex, __assign({ justify: "space-between", align: "center" }, { children: [_jsxs(Box, { children: [_jsx(Heading, __assign({ size: "lg", "data-testid": "protochakra.cta.heading" }, { children: heading }), void 0), description && (_jsx(Text, __assign({ marginTop: "1rem", "data-testid": "protochakra.cta.description" }, { children: description }), void 0))] }, void 0), _jsx(Box, __assign({ "data-testid": "protochakra.cta.addons" }, { children: children }), void 0)] }), void 0) }), void 0) }), void 0));
};
export default CallToAction;

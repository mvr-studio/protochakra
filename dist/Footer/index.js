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
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
var Footer = function (_a) {
    var copyrightOwner = _a.copyrightOwner, children = _a.children, maxWidth = _a.maxWidth, containerProps = __rest(_a, ["copyrightOwner", "children", "maxWidth"]);
    var currentYear = new Date().getFullYear();
    return (_jsxs(Box, __assign({ paddingY: "2rem" }, containerProps, { children: [_jsx(Container, __assign({ maxWidth: maxWidth || 'container.xl' }, { children: _jsx(SimpleGrid, __assign({ columns: [1, 1, 4], gridGap: "2rem" }, { children: children }), void 0) }), void 0), copyrightOwner && (_jsxs(Container, __assign({ maxWidth: maxWidth || 'container.xl', textAlign: ['left', 'left', 'center'], marginTop: "2rem", "data-testid": "protochakra.footer.copyrightOwner" }, { children: ["\u00A9 ", currentYear, " ", copyrightOwner] }), void 0))] }), void 0));
};
export default Footer;

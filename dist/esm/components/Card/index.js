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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@chakra-ui/react';
import { rgba } from 'polished';
export var CARD_DEFAULTS = {
    shadowOffsetX: 0,
    shadowOffsetY: '0.25rem',
    blurRadius: '0.25rem',
    spreadRadius: 0,
    shadowColor: '#000000',
    shadowAlpha: 0.075,
    borderRadius: '0.5rem',
    padding: '1rem',
    border: '1px #E9EAF2 solid'
};
var Card = function (_a) {
    var children = _a.children, _b = _a.shadowOffsetX, shadowOffsetX = _b === void 0 ? CARD_DEFAULTS.shadowOffsetX : _b, _c = _a.shadowOffsetY, shadowOffsetY = _c === void 0 ? CARD_DEFAULTS.shadowOffsetY : _c, _d = _a.blurRadius, blurRadius = _d === void 0 ? CARD_DEFAULTS.blurRadius : _d, _e = _a.spreadRadius, spreadRadius = _e === void 0 ? CARD_DEFAULTS.spreadRadius : _e, _f = _a.shadowColor, shadowColor = _f === void 0 ? CARD_DEFAULTS.shadowColor : _f, _g = _a.shadowAlpha, shadowAlpha = _g === void 0 ? CARD_DEFAULTS.shadowAlpha : _g, _h = _a.borderRadius, borderRadius = _h === void 0 ? CARD_DEFAULTS.borderRadius : _h, _j = _a.padding, padding = _j === void 0 ? CARD_DEFAULTS.padding : _j, _k = _a.border, border = _k === void 0 ? CARD_DEFAULTS.border : _k, boxShadow = _a.boxShadow, rest = __rest(_a, ["children", "shadowOffsetX", "shadowOffsetY", "blurRadius", "spreadRadius", "shadowColor", "shadowAlpha", "borderRadius", "padding", "border", "boxShadow"]);
    var computedShadow = boxShadow || "".concat(shadowOffsetX, " ").concat(shadowOffsetY, " ").concat(blurRadius, " ").concat(spreadRadius, " ").concat(rgba(shadowColor, shadowAlpha));
    return (_jsx(Box, __assign({ boxShadow: computedShadow, borderRadius: borderRadius, padding: padding, border: border, "data-testid": "protochakra.card" }, rest, { children: children })));
};
export default Card;

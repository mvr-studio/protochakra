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
var BASE_ARRAY = [false, false, false, false, false];
var HIDDEN_ABOVE = {
    sm: [false, true, true, true, true],
    md: [false, false, true, true, true],
    lg: [false, false, false, true, true],
    xl: [false, false, false, false, true]
};
var HIDDEN_BELOW = {
    md: [true, false, false, false, false],
    lg: [true, true, false, false, false],
    xl: [true, true, true, false, false],
    '2xl': [true, true, true, true, false]
};
export var arrayToDisplay = function (property, defaultDisplay) {
    return property.map(function (value) { return (value ? 'none' : defaultDisplay); });
};
export var mergeBooleanArrays = function (first, second) {
    return BASE_ARRAY.map(function (value, i) { return value || (first === null || first === void 0 ? void 0 : first[i]) || (second === null || second === void 0 ? void 0 : second[i]) || false; });
};
var Hidden = function (_a) {
    var above = _a.above, below = _a.below, display = _a.display, defaultDisplay = _a.defaultDisplay, restOfProps = __rest(_a, ["above", "below", "display", "defaultDisplay"]);
    var aboveArray = above ? HIDDEN_ABOVE[above] : [];
    var belowArray = below ? HIDDEN_BELOW[below] : [];
    var mergedArrays = mergeBooleanArrays(aboveArray, belowArray);
    var hiddenDisplay = arrayToDisplay(mergedArrays, defaultDisplay || 'block');
    return _jsx(Box, __assign({ display: hiddenDisplay || display }, restOfProps), void 0);
};
export default Hidden;

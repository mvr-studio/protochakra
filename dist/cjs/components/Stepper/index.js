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
var Indicator = function (_a) {
    var stepNumber = _a.stepNumber, isActive = _a.isActive, isCurrent = _a.isCurrent, activeColor = _a.activeColor, inactiveColor = _a.inactiveColor;
    return ((0, jsx_runtime_1.jsx)(react_1.Center, __assign({ height: "2rem", width: "2rem", borderRadius: "50%", backgroundColor: isActive ? activeColor : inactiveColor, color: "white", "data-testid": "protochakra.stepper.indicator" }, { children: isActive ? isCurrent ? stepNumber : (0, jsx_runtime_1.jsx)(react_1.Icon, { as: icons_1.CheckIcon }, void 0) : stepNumber }), void 0));
};
var Line = function () {
    return (0, jsx_runtime_1.jsx)(react_1.Box, { flex: 1, height: "1px", width: "100%", backgroundColor: "gray.300", marginTop: "1rem" }, void 0);
};
var Stepper = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, _b = _a.activeColor, activeColor = _b === void 0 ? 'blue.600' : _b, _c = _a.inactiveColor, inactiveColor = _c === void 0 ? 'gray.500' : _c;
    var isFirstStep = function (i) { return i !== 0; };
    var isLastStep = function (i) { return i !== steps.length - 1; };
    var isActive = function (i) { return i <= currentStep; };
    return ((0, jsx_runtime_1.jsx)(react_1.Flex, __assign({ justify: "space-between", "data-testid": "protochakra.stepper", "data-current-step": currentStep }, { children: steps.map(function (step, i) { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isFirstStep(i) && (0, jsx_runtime_1.jsx)(Line, {}, void 0), (0, jsx_runtime_1.jsxs)(react_1.Center, __assign({ flexDirection: "column", "data-testid": "protochakra.step", "data-is-active": isActive(i), "data-is-current": i === currentStep }, { children: [(0, jsx_runtime_1.jsx)(Indicator, { stepNumber: i + 1, isActive: isActive(i), isCurrent: i === currentStep, activeColor: activeColor, inactiveColor: inactiveColor }, i), (0, jsx_runtime_1.jsx)(react_1.Text, __assign({ fontSize: "14px", marginTop: "0.25rem", color: isActive(i) ? activeColor : inactiveColor }, { children: step }), void 0)] }), void 0), isLastStep(i) && (0, jsx_runtime_1.jsx)(Line, {}, void 0)] }, void 0)); }) }), void 0));
};
exports.default = Stepper;

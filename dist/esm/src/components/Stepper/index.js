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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Center, Icon, Flex, Text, Box } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
var Indicator = function (_a) {
    var stepNumber = _a.stepNumber, isActive = _a.isActive, isCurrent = _a.isCurrent, activeColor = _a.activeColor, inactiveColor = _a.inactiveColor;
    return (_jsx(Center, __assign({ height: "2rem", width: "2rem", borderRadius: "50%", backgroundColor: isActive ? activeColor : inactiveColor, color: "white", "data-testid": "protochakra.stepper.indicator" }, { children: isActive ? isCurrent ? stepNumber : _jsx(Icon, { as: CheckIcon }) : stepNumber })));
};
var Line = function () {
    return _jsx(Box, { flex: 1, height: "1px", width: "100%", backgroundColor: "gray.300", marginTop: "1rem" });
};
var Stepper = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, _b = _a.activeColor, activeColor = _b === void 0 ? 'blue.600' : _b, _c = _a.inactiveColor, inactiveColor = _c === void 0 ? 'gray.500' : _c;
    var isFirstStep = function (i) { return i !== 0; };
    var isLastStep = function (i) { return i !== steps.length - 1; };
    var isActive = function (i) { return i <= currentStep; };
    return (_jsx(Flex, __assign({ justify: "space-between", "data-testid": "protochakra.stepper", "data-current-step": currentStep }, { children: steps.map(function (step, i) { return (_jsxs(React.Fragment, { children: [isFirstStep(i) && _jsx(Line, {}), _jsxs(Center, __assign({ flexDirection: "column", "data-testid": "protochakra.step", "data-is-active": isActive(i), "data-is-current": i === currentStep }, { children: [_jsx(Indicator, { stepNumber: i + 1, isActive: isActive(i), isCurrent: i === currentStep, activeColor: activeColor, inactiveColor: inactiveColor }, i), _jsx(Text, __assign({ fontSize: "14px", marginTop: "0.25rem", color: isActive(i) ? activeColor : inactiveColor }, { children: step }))] })), isLastStep(i) && _jsx(Line, {})] }, i)); }) })));
};
export default Stepper;

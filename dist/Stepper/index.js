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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Center, Icon, Flex, Text, Box } from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
var Indicator = function (_a) {
    var stepNumber = _a.stepNumber, isActive = _a.isActive, isCurrent = _a.isCurrent;
    return (_jsx(Center, __assign({ height: "2rem", width: "2rem", borderRadius: "50%", backgroundColor: isActive ? 'blue.500' : 'gray.500', color: "white", "data-testid": "protochakra.stepper.indicator" }, { children: isActive ? isCurrent ? stepNumber : _jsx(Icon, { as: FiCheck }, void 0) : stepNumber }), void 0));
};
var Line = function () {
    return _jsx(Box, { flex: 1, height: "1px", width: "100%", backgroundColor: "gray.300", marginTop: "1rem" }, void 0);
};
var Stepper = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep;
    var isFirstStep = function (i) { return i !== 0; };
    var isLastStep = function (i) { return i !== steps.length - 1; };
    var isActive = function (i) { return i <= currentStep; };
    return (_jsx(Flex, __assign({ justify: "space-between", "data-testid": "protochakra.stepper", "data-current-step": currentStep }, { children: steps.map(function (step, i) { return (_jsxs(_Fragment, { children: [isFirstStep(i) && _jsx(Line, {}, void 0), _jsxs(Center, __assign({ flexDirection: "column", "data-testid": "protochakra.step", "data-is-active": isActive(i), "data-is-current": i === currentStep }, { children: [_jsx(Indicator, { stepNumber: i + 1, isActive: isActive(i), isCurrent: i === currentStep }, i), _jsx(Text, __assign({ fontSize: "14px", marginTop: "0.25rem", color: isActive(i) ? 'blue.600' : 'gray.500' }, { children: step }), void 0)] }), void 0), isLastStep(i) && _jsx(Line, {}, void 0)] }, void 0)); }) }), void 0));
};
export default Stepper;

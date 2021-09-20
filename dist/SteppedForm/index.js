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
import { useState } from 'react';
import { Box, Text, Heading, HStack, IconButton, Icon } from '@chakra-ui/react';
import SimpleForm from 'SimpleForm';
import Stepper from 'Stepper';
import { FiArrowLeft } from 'react-icons/fi';
var SteppedForm = function (_a) {
    var _b, _c, _d;
    var steps = _a.steps, customErrorMessages = _a.customErrorMessages, buttonProps = _a.buttonProps, onFormSubmit = _a.onFormSubmit;
    var _e = useState(0), currentStep = _e[0], setCurrentStep = _e[1];
    var setNextStep = function () { return setCurrentStep(currentStep + 1); };
    var setPreviousStep = function () { return setCurrentStep(currentStep - 1); };
    var isFirstStep = currentStep === 0;
    var isLastStep = currentStep === steps.length - 1;
    var stepperSteps = steps.map(function (step) { return step.name; });
    var currentStepFields = (_b = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _b === void 0 ? void 0 : _b.fields;
    var currentStepName = (_c = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _c === void 0 ? void 0 : _c.name;
    var currentStepDescription = (_d = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _d === void 0 ? void 0 : _d.description;
    var buttonLabel = isLastStep ? 'Submit' : 'Next';
    var onSubmit = function (data) {
        if (isLastStep) {
            onFormSubmit(data);
        }
        else {
            setNextStep();
        }
    };
    return (_jsxs(Box, { children: [_jsx(Stepper, { steps: stepperSteps, currentStep: currentStep }, void 0), _jsxs(HStack, __assign({ marginTop: "1rem" }, { children: [!isFirstStep && (_jsx(IconButton, __assign({ "aria-label": "Go back", variant: "ghost", onClick: setPreviousStep }, { children: _jsx(Icon, { as: FiArrowLeft }, void 0) }), void 0)), _jsx(Heading, __assign({ size: "lg" }, { children: currentStepName }), void 0)] }), void 0), currentStepDescription && _jsx(Text, __assign({ marginTop: "1rem" }, { children: currentStepDescription }), void 0), _jsx(Box, __assign({ marginTop: "1rem" }, { children: _jsx(SimpleForm, { fields: currentStepFields, onSubmit: onSubmit, buttonLabel: buttonLabel, customErrorMessages: customErrorMessages, buttonProps: buttonProps }, void 0) }), void 0)] }, void 0));
};
export default SteppedForm;

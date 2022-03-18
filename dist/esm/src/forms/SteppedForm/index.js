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
import SimpleForm from '../SimpleForm';
import Stepper from '../../components/Stepper';
import { ArrowBackIcon } from '@chakra-ui/icons';
var SteppedForm = function (_a) {
    var _b, _c, _d;
    var steps = _a.steps, customErrorMessages = _a.customErrorMessages, buttonProps = _a.buttonProps, onFormSubmit = _a.onFormSubmit;
    var _e = useState({}), formData = _e[0], setFormData = _e[1];
    var _f = useState(0), currentStep = _f[0], setCurrentStep = _f[1];
    var setNextStep = function () { return setCurrentStep(currentStep + 1); };
    var setPreviousStep = function () { return setCurrentStep(currentStep - 1); };
    var isFirstStep = currentStep === 0;
    var isLastStep = currentStep === steps.length - 1;
    var stepperSteps = steps.map(function (step) { return step.name; });
    var currentStepFields = (_b = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _b === void 0 ? void 0 : _b.fields;
    var currentStepName = (_c = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _c === void 0 ? void 0 : _c.name;
    var currentStepDescription = (_d = steps === null || steps === void 0 ? void 0 : steps[currentStep]) === null || _d === void 0 ? void 0 : _d.description;
    var buttonLabel = isLastStep ? 'Submit' : 'Next';
    var pushFormData = function (data) {
        setFormData(__assign(__assign({}, formData), data));
    };
    var onSubmit = function (data) {
        pushFormData(data);
        if (isLastStep) {
            onFormSubmit(__assign(__assign({}, formData), data));
        }
        else {
            setNextStep();
        }
    };
    var currentStepFieldsWithDefaultValues = currentStepFields.map(function (field) { return (__assign(__assign({}, field), { defaultValue: field.name && formData[field.name], defaultChecked: field.name && formData[field.name] })); });
    return (_jsxs(Box, { children: [_jsx(Stepper, { steps: stepperSteps, currentStep: currentStep }), _jsxs(HStack, __assign({ marginTop: "1rem" }, { children: [!isFirstStep && (_jsx(IconButton, __assign({ "aria-label": "Go back", variant: "ghost", onClick: setPreviousStep }, { children: _jsx(Icon, { as: ArrowBackIcon }) }))), _jsx(Heading, __assign({ size: "lg" }, { children: currentStepName }))] })), currentStepDescription && _jsx(Text, __assign({ marginTop: "1rem" }, { children: currentStepDescription })), _jsx(Box, __assign({ marginTop: "1rem" }, { children: _jsx(SimpleForm, { fields: currentStepFieldsWithDefaultValues, onSubmit: onSubmit, buttonLabel: buttonLabel, customErrorMessages: customErrorMessages, buttonProps: buttonProps }, currentStep) }))] }));
};
export default SteppedForm;

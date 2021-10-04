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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var SimpleForm_1 = __importDefault(require("../SimpleForm"));
var Stepper_1 = __importDefault(require("../../components/Stepper"));
var icons_1 = require("@chakra-ui/icons");
var SteppedForm = function (_a) {
    var _b, _c, _d;
    var steps = _a.steps, customErrorMessages = _a.customErrorMessages, buttonProps = _a.buttonProps, onFormSubmit = _a.onFormSubmit;
    var _e = (0, react_1.useState)(0), currentStep = _e[0], setCurrentStep = _e[1];
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
    return ((0, jsx_runtime_1.jsxs)(react_2.Box, { children: [(0, jsx_runtime_1.jsx)(Stepper_1.default, { steps: stepperSteps, currentStep: currentStep }, void 0), (0, jsx_runtime_1.jsxs)(react_2.HStack, __assign({ marginTop: "1rem" }, { children: [!isFirstStep && ((0, jsx_runtime_1.jsx)(react_2.IconButton, __assign({ "aria-label": "Go back", variant: "ghost", onClick: setPreviousStep }, { children: (0, jsx_runtime_1.jsx)(react_2.Icon, { as: icons_1.ArrowBackIcon }, void 0) }), void 0)), (0, jsx_runtime_1.jsx)(react_2.Heading, __assign({ size: "lg" }, { children: currentStepName }), void 0)] }), void 0), currentStepDescription && (0, jsx_runtime_1.jsx)(react_2.Text, __assign({ marginTop: "1rem" }, { children: currentStepDescription }), void 0), (0, jsx_runtime_1.jsx)(react_2.Box, __assign({ marginTop: "1rem" }, { children: (0, jsx_runtime_1.jsx)(SimpleForm_1.default, { fields: currentStepFields, onSubmit: onSubmit, buttonLabel: buttonLabel, customErrorMessages: customErrorMessages, buttonProps: buttonProps }, void 0) }), void 0)] }, void 0));
};
exports.default = SteppedForm;

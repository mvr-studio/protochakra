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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var react_hook_form_1 = require("react-hook-form");
var DEFAULT_FORM_ERRORS = {
    required: 'This field is required.'
};
var FormField = react_1.default.forwardRef(function (_a, ref) {
    var type = _a.type, selectOptions = _a.selectOptions, placeholder = _a.placeholder, rest = __rest(_a, ["type", "selectOptions", "placeholder"]);
    switch (type) {
        case 'textarea':
            return (0, jsx_runtime_1.jsx)(react_2.Textarea, __assign({ placeholder: placeholder, ref: ref }, rest));
        case 'select':
            return ((0, jsx_runtime_1.jsx)(react_2.Select, __assign({ placeholder: placeholder || 'Select one', ref: ref }, rest, { children: selectOptions === null || selectOptions === void 0 ? void 0 : selectOptions.map(function (option) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: option.value, selected: option.selected }, { children: option.label }))); }) })));
        case 'checkbox':
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(react_2.Checkbox, __assign({ size: "lg", ref: ref }, rest, { children: placeholder })));
        default:
            return (0, jsx_runtime_1.jsx)(react_2.Input, __assign({ placeholder: placeholder, type: type, ref: ref }, rest));
    }
});
var SimpleForm = function (_a) {
    var fields = _a.fields, onSubmit = _a.onSubmit, buttonLabel = _a.buttonLabel, buttonProps = _a.buttonProps, customErrorMessages = _a.customErrorMessages;
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    var getFormError = function (errorType) { return (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages[errorType]) || (DEFAULT_FORM_ERRORS === null || DEFAULT_FORM_ERRORS === void 0 ? void 0 : DEFAULT_FORM_ERRORS[errorType]); };
    return ((0, jsx_runtime_1.jsxs)(react_2.Stack, __assign({ as: "form", onSubmit: handleSubmit(onSubmit), gridGap: "0.5rem", "data-testid": "protochakra.simpleForm", noValidate: true }, { children: [fields.map(function (field, i) {
                var _a;
                if (!field.name)
                    throw new Error('name property missing for field');
                return ((0, jsx_runtime_1.jsxs)(react_2.FormControl, __assign({ isRequired: field === null || field === void 0 ? void 0 : field.isRequired, isInvalid: !!(errors === null || errors === void 0 ? void 0 : errors[field.name]), marginTop: "1rem", "data-testid": "protochakra.simpleForm.control" }, { children: [(field === null || field === void 0 ? void 0 : field.label) && (0, jsx_runtime_1.jsx)(react_2.FormLabel, __assign({ "data-testid": "protochakra.simpleForm.label" }, { children: field.label })), (0, jsx_runtime_1.jsx)(FormField, __assign({ type: field === null || field === void 0 ? void 0 : field.type, selectOptions: field === null || field === void 0 ? void 0 : field.selectOptions, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, "data-testid": "protochakra.simpleForm.field" }, register(field.name, { required: field === null || field === void 0 ? void 0 : field.isRequired }), field)), (0, jsx_runtime_1.jsx)(react_2.FormErrorMessage, __assign({ "data-testid": "protochakra.simpleForm.error" }, { children: getFormError((_a = errors === null || errors === void 0 ? void 0 : errors[field.name]) === null || _a === void 0 ? void 0 : _a.type) })), (field === null || field === void 0 ? void 0 : field.helperText) && ((0, jsx_runtime_1.jsx)(react_2.FormHelperText, __assign({ "data-testid": "protochakra.simpleForm.helper" }, { children: field.helperText })))] }), i));
            }), (0, jsx_runtime_1.jsx)(react_2.Box, { children: (0, jsx_runtime_1.jsx)(react_2.Button, __assign({ type: "submit", size: "lg", isLoading: isSubmitting, "data-testid": "protochakra.simpleForm.submit" }, buttonProps, { children: buttonLabel || 'Submit' })) })] })));
};
exports.default = SimpleForm;

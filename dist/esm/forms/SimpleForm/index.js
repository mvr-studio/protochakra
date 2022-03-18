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
import React from 'react';
import { Box, Input, FormControl, FormLabel, FormHelperText, Button, Textarea, Stack, FormErrorMessage, Select, Checkbox } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
var DEFAULT_FORM_ERRORS = {
    required: 'This field is required.'
};
var FormField = React.forwardRef(function (_a, ref) {
    var type = _a.type, selectOptions = _a.selectOptions, placeholder = _a.placeholder, rest = __rest(_a, ["type", "selectOptions", "placeholder"]);
    switch (type) {
        case 'textarea':
            return _jsx(Textarea, __assign({ placeholder: placeholder, ref: ref }, rest));
        case 'select':
            return (_jsx(Select, __assign({ placeholder: placeholder || 'Select one', ref: ref }, rest, { children: selectOptions === null || selectOptions === void 0 ? void 0 : selectOptions.map(function (option) { return (_jsx("option", __assign({ value: option.value, selected: option.selected }, { children: option.label }))); }) })));
        case 'checkbox':
            return (
            // @ts-ignore
            _jsx(Checkbox, __assign({ size: "lg", ref: ref }, rest, { children: placeholder })));
        default:
            return _jsx(Input, __assign({ placeholder: placeholder, type: type, ref: ref }, rest));
    }
});
var SimpleForm = function (_a) {
    var fields = _a.fields, onSubmit = _a.onSubmit, buttonLabel = _a.buttonLabel, buttonProps = _a.buttonProps, customErrorMessages = _a.customErrorMessages;
    var _b = useForm(), register = _b.register, handleSubmit = _b.handleSubmit, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    var getFormError = function (errorType) { return (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages[errorType]) || (DEFAULT_FORM_ERRORS === null || DEFAULT_FORM_ERRORS === void 0 ? void 0 : DEFAULT_FORM_ERRORS[errorType]); };
    return (_jsxs(Stack, __assign({ as: "form", onSubmit: handleSubmit(onSubmit), gridGap: "0.5rem", "data-testid": "protochakra.simpleForm", noValidate: true }, { children: [fields.map(function (field) {
                var _a;
                if (!field.name)
                    throw new Error('name property missing for field');
                return (_jsxs(FormControl, __assign({ isRequired: field === null || field === void 0 ? void 0 : field.isRequired, isInvalid: !!(errors === null || errors === void 0 ? void 0 : errors[field.name]), marginTop: "1rem", "data-testid": "protochakra.simpleForm.control" }, { children: [(field === null || field === void 0 ? void 0 : field.label) && _jsx(FormLabel, __assign({ "data-testid": "protochakra.simpleForm.label" }, { children: field.label })), _jsx(FormField, __assign({ type: field === null || field === void 0 ? void 0 : field.type, selectOptions: field === null || field === void 0 ? void 0 : field.selectOptions, placeholder: field === null || field === void 0 ? void 0 : field.placeholder, "data-testid": "protochakra.simpleForm.field" }, register(field.name, { required: field === null || field === void 0 ? void 0 : field.isRequired }), field)), _jsx(FormErrorMessage, __assign({ "data-testid": "protochakra.simpleForm.error" }, { children: getFormError((_a = errors === null || errors === void 0 ? void 0 : errors[field.name]) === null || _a === void 0 ? void 0 : _a.type) })), (field === null || field === void 0 ? void 0 : field.helperText) && (_jsx(FormHelperText, __assign({ "data-testid": "protochakra.simpleForm.helper" }, { children: field.helperText })))] })));
            }), _jsx(Box, { children: _jsx(Button, __assign({ type: "submit", size: "lg", isLoading: isSubmitting, "data-testid": "protochakra.simpleForm.submit" }, buttonProps, { children: buttonLabel || 'Submit' })) })] })));
};
export default SimpleForm;

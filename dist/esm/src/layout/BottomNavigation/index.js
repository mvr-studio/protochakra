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
import { Box, HStack, Stack, Text, Icon } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
var BottomNavigation = function (_a) {
    var tabs = _a.tabs, onChange = _a.onChange, padding = _a.padding, containerProps = _a.containerProps, tabProps = _a.tabProps;
    return (_jsx(Box, __assign({ padding: '0.5rem 1rem 0.75rem' || padding, "data-testid": "protochakra.bottomNavigation" }, containerProps, { children: _jsx(HStack, __assign({ justify: "space-around" }, { children: tabs.map(function (tab, i) { return (_jsxs(Stack, __assign({ justifyContent: "center", alignItems: "center", cursor: "pointer", onClick: function () { return (tab.onChangeOverride ? tab.onChangeOverride(tab.pathname) : onChange(tab.pathname)); } }, tabProps, { children: [_jsx(Icon, { as: tab.Icon || QuestionOutlineIcon, boxSize: "1.5rem" }), _jsx(Text, __assign({ fontSize: "0.75rem", lineHeight: 0.5 }, { children: tab.label }))] }), i)); }) })) })));
};
export default BottomNavigation;

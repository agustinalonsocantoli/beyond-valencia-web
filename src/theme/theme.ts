import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1228px',
    xl: '1440px',
    '2xl': '1980px',
};

const theme = extendTheme({ breakpoints });

export { theme };
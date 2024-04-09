import { createTheme, responsiveFontSizes } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

export let theme = createTheme({
    typography: {
        // fontFamily: ['Arial'].join(','),
    },
    palette: {
        primary: {
            main: '#023c2e',
        },
        secondary: {
            main: '#EBAE46;',
            light: '#f8fafb',
        },
        info: {
            main: '#000',
        },
    },
    components: {},
});

theme = responsiveFontSizes(theme);

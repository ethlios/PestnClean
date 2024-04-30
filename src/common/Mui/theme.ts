import { createTheme, responsiveFontSizes } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

export let theme = createTheme({
    typography: {
        fontFamily: ['Montserrat'].join(','),
    },
    palette: {
        primary: {
            main: '#0274be',
        },
        secondary: {
            main: '#78b461',
            light: '#8c8d8f',
        },
        info: {
            main: '#000',
        },
    },
    components: {},
});

theme = responsiveFontSizes(theme);

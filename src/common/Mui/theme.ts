import { createTheme, responsiveFontSizes } from '@mui/material';
import RootLayout from '../../app/layout';
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
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 600,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 500,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 500,
                    fontFamily: ['Montserrat'].join(','),
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 500,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 600,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    paddingLeft: '0px',
                    paddingRight: '0px',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

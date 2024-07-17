// theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // blue
            contrastText: '#ffffff' // white
        },
        secondary: {
            main: '#f48fb1', // pink
        },
        background: {
            default: '#ffffff', // white
            paper: '#f5f5f5', // light grey
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333', // dark grey
            contrastText: '#ffffff' // white
        },
        secondary: {
            main: '#f48fb1', // pink
        },
        background: {
            default: '#121212', // dark grey
            paper: '#1d1d1d', // darker grey
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'background.paper',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#fff',
                },
            },
        },
    },
});

export default darkTheme;

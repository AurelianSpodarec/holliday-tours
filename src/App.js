import React from 'react';

import { withStyles } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from './../context/ContextAuth';

import Layout from './views/Layout';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    }
});

function App() {

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>

                <Layout />

            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;

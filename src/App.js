import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from './context/ContextAuth';

import Layout from './views/Layout';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Nunito"',
        ].join(',')
    },
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

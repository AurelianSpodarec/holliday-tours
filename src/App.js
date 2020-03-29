import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from './context/ContextAuth';

import Layout from './views/Layout';
import HTModal from './components/HTModal/HTModal';

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

                <HTModal />

                <Layout />

            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;

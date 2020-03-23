import React from 'react';

import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Header, Footer } from './../components';

const browserHistory = createBrowserHistory();

function Layout() {
    return (
        <div className="Layout">
            <Header />

            <Router history={browserHistory}>
                <Routes />
            </Router>

            <Footer />
        </div>
    );
}

export default Layout;

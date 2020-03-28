import React from 'react';

import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { HTHeader, HTFooter } from './../components';

const browserHistory = createBrowserHistory();

function Layout() {
    return (
        <div className="Layout">
            <HTHeader />

            <Router history={browserHistory}>
                <Routes />
            </Router>

            <HTFooter />
        </div>
    );
}

export default Layout;

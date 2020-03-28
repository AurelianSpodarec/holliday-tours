import React from 'react';

import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { HTHeader, HTFooter } from './../components';

const browserHistory = createBrowserHistory();

function Layout() {
    return (
        <div className="Layout">
            <Router history={browserHistory}>
                <HTHeader />

                <Routes />

                <HTFooter />
            </Router>
        </div>
    );
}

export default Layout;

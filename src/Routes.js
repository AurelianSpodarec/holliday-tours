import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import {
//     Home as HomeView,
//     Tours as ToursView,
//     NotFound as NotFoundView
// } from './views';

import Home from './views/Home';
import Tours from './views/Tours';
import NotFound from './views/NotFound';

const Routing = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/tours",
        component: Tours,

    },
    // {
    //     path: "/tours/:id",
    //     component: TourItem,

    // },
    {
        path: "*",
        component: NotFound,
    }
]

const Routes = () => {
    return <Switch>
        {Routing.map((route =>
            <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
    </Switch>
}

export default Routes;
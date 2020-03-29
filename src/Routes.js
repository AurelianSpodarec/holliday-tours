import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import { ToursView, TourView } from './views/Tours';
import MyProfile from './views/MyProfile/MyProfile';
import NotFound from './views/NotFound';


const Routing = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/tours",
        component: ToursView,

    },
    {
        path: "/tours/:id",
        component: TourView,
    },
    {
        path: "/my-profile",
        component: MyProfile,
    },
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
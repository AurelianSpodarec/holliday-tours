import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Home
        </div>
    );
}

export default Home;

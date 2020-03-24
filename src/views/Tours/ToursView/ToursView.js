import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

function ToursView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            ToursView
        </div>
    );
}

export default ToursView;

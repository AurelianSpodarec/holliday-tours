import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

function TourView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            TourView
        </div>
    );
}

export default TourView;

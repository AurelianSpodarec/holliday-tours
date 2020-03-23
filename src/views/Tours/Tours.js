import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

function Tours() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Tours
        </div>
    );
}

export default Tours;

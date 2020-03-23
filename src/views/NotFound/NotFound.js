import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

function NotFound() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1">
                404: The page you are looking for isn’t here
            </Typography>
            <Typography variant="subtitle2">
                You either tried some shady route(naughty, naughty!) or you came here by mistake.
                Whichever it is, try using the navigation :-)
            </Typography>
        </div>
    );
}

export default NotFound;

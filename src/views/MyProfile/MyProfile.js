import React from 'react';

import { Button, Typography, Container } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import useStyles from './styles';


function MyProfile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            My Profile

        </div>
    );
}

export default MyProfile;

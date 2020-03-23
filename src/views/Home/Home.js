import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import firebase from './../../firebase';
function Home() {
    const classes = useStyles();

    //TODO: Add error handling and re-factor this a lil bit
    const signUp = async (data) => {
        console.log("Sig", firebase)
        const req = firebase.auth().createUserWithEmailAndPassword("ass", "ss");
        console.log("Sign up", req)
        return req;
    }

    return (
        <div onClick={signUp} className={classes.root}>
            Home
        </div>
    );
}

export default Home;

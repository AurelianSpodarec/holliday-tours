import React from 'react';

// import { Grid, Typography } from '@material-ui/core';

import { HTMedia } from '../../components';

import useStyles from './styles';


function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HTMedia
                src="https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1"
                blockIframe
            />
        </div>
    );
}

export default Home;

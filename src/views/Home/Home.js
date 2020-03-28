import React from 'react';

import { HTMedia } from '../../components';

import { Button, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import useStyles from './styles';


function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.homeBanner}>
                <HTMedia
                    src="https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1"
                    blockIframe
                />
                <div className={classes.homeBannerCaption}>

                    <Typography variant="h3" >Awesome Tours</Typography>
                    <Typography variant="subtitle1" gutterBottom>Explore one of the best world class tours in the world, based in Melebourne!</Typography>

                    <Button
                        variant="outlined" color="secondary"
                        className={classes.button}
                        startIcon={<PlayCircleOutlineIcon />}
                    > Watch Video</Button>
                    <Button
                        variant="outlined" color="secondary">Book a Tour</Button>
                </div>
            </div>

        </div>
    );
}

export default Home;

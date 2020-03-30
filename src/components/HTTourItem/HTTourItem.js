import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";

import StarIcon from '@material-ui/icons/Star';

import HTAddToFavourite from "../HTAddToFavourite/HTAddToFavourite";

import useStyles from "./styles";


const HTTourItem = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card>
            {/* <CardActionArea> */}
            <CardMedia
                className={classes.media}
                image="https://melbourne-tours-housemates.netlify.com/assets/images/banners/tours-banner.jpg"
                title="Contemplative Reptile"
            >
                <HTAddToFavourite />
            </CardMedia>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    musement
                    </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Magnificent Melbourne Morning City Tours
                    </Typography>
            </CardContent>
            <CardActions>

                <div>

                </div>

            </CardActions>
            {/* </CardActionArea> */}
        </Card>
    );
};

export default HTTourItem;
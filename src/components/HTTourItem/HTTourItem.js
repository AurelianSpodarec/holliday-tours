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
        <Card className={classes.root}>
            {/* <CardActionArea> */}

            <div className={classes.imageWrap}>
                <CardMedia
                    className={classes.image}
                    image={"https://melbourne-tours-housemates.netlify.com/assets/images/banners/tours-banner.jpg"}>
                    <HTAddToFavourite />
                    {/* <img className={classes.image} src="https://melbourne-tours-housemates.netlify.com/assets/images/banners/tours-banner.jpg" /> */}
                </CardMedia>
            </div>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    musement
                    </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Magnificent Melbourne Morning City Tours
                    </Typography>
            </CardContent>
            <CardActions className={classes.footer}>

                <div className={classes.rating}>
                    {/* <Icon className="tour-item__rating-icon" name="star" /> */}

                    <Typography className={classes.ratingScore}><StarIcon className={classes.ratingIcon} />{8.88834.toFixed(2)}</Typography>
                </div>
                <div className="tour-item__price-wrap">
                    <Typography className={classes.ratingPrice}>A$ 54</Typography>
                </div>

            </CardActions>
            {/* </CardActionArea> */}
        </Card>
    );
};

export default HTTourItem;
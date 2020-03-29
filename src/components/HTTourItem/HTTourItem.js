import React, { useState } from "react";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";

import { useSelector, useDispatch, connect } from "react-redux";

import useStyles from "./styles";

const HTTourItem = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default HTTourItem;
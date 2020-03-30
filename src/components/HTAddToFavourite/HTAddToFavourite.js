import React, { useState } from "react";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from "./styles";

const HTAddToFavourite = () => {
    const classes = useStyles();
    const [isLike, setIsLike] = useState(false)

    function onLike() {
        setIsLike(!isLike)
    }

    return (
        <div onClick={onLike}>
            {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
    );
};

export default HTAddToFavourite;
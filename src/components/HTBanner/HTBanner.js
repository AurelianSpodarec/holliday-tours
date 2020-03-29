import React from 'react';

import useStyles from './styles';
import CardMedia from '@material-ui/core/CardMedia';
function HTBanner({ title, subTitle, image }) {

    //TODO: Add parallax effect 
    const classes = useStyles();

    return (
        <div className={classes.banner}>

            <div className={classes.overlay}></div>
            <CardMedia
                component="img"
                className={classes.image} image={image}
                title="Contemplative Reptile" />
            <div className={classes.caption}>
                {title && <h1 className={classes.title}>{title}</h1>}
                {subTitle && <span> {subTitle}</span>}
            </div>

        </div>
    );
}

export default HTBanner;

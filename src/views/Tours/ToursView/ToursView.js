import React from 'react';

import { HTTourItem } from '../../../components';

import useStyles from './styles';
import HTBanner from '../../../components/HTBanner/HTBanner';


function ToursView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HTBanner
                image={"https://melbourne-tours-housemates.netlify.com/assets/images/banners/tours-banner.jpg"}
                title="Tours"
            />

            <HTTourItem />
            <HTTourItem />
            <HTTourItem />
        </div>
    );
}

export default ToursView;

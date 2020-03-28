import React from 'react';

import { Button } from '@material-ui/core';
import { HTMedia } from '../../components';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store/actions/HTModalActions';

import useStyles from './styles';


function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <HTMedia
                src="https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1"
                blockIframe
            />

            <Button onClick={() => dispatch(openModal('AUTH'))}>Open Auth Modal</Button>
            <Button onClick={() => dispatch(openModal('TEST'))}>Open TEST Modal</Button>

        </div>
    );
}

export default Home;

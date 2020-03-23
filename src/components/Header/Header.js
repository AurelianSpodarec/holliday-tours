import React from 'react';

import useStyles from './styles';


function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Header
        </div>
    );
}

export default Header;

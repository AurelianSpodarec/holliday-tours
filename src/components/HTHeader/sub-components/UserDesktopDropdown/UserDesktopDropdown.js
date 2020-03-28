import React, { useState, useContext } from 'react';

import {
    Hidden,
    IconButton,
    Button,
    MenuItem,
    Menu,
    Fade
} from '@material-ui/core';
import { AccountCircle } from "@material-ui/icons";


import useStyles from './styles';


function UserDekstopDropdown() {
    const classes = useStyles();
    const [anchorUserMenu, setAnchorUserMenu] = useState(null)

    const open = Boolean(anchorUserMenu);

    const handleClick = event => {
        setAnchorUserMenu(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorUserMenu(null);
    };

    return (
        <>
            <Hidden smDown>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={renderUserDropdown}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Button>
            </Hidden>

            <Menu
                id="fade-menu"
                anchorEl={anchorUserMenu}
                keepMounted
                elevation={0}
                getContentAnchorEl={null}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
}

export default UserDekstopDropdown;

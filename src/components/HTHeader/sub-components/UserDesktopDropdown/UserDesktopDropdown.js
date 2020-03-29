import React, { useState, useContext } from 'react';



import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

import {
    Hidden,
    IconButton,
    Button,
    MenuItem,
    Menu,
    Fade,
    ListItemIcon,
    Typography
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { logout } from '../../../../services/firebase/auth';

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
                        <AccountCircleIcon />
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
                <Link to="/my-profile">
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">My Profile</Typography>
                    </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
        </>
    );
}

export default UserDekstopDropdown;

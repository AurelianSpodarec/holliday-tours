import React, { useState, useContext } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Drawer,
    Hidden,
    IconButton,
    Typography,
    Button,
    InputBase,
    MenuItem,
    CardMedia,
    Menu,
} from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import { AuthContext } from '../../context/ContextAuth';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store/actions/HTModalActions';

import { UserDekstopDropdown } from './sub-components';
import useStyles from './styles';


function HTHeader() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const { authData } = useContext(AuthContext);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    function handleUserMenuToggle() {
        setUserMenuOpen(!userMenuOpen)
    }

    return (

        <div className={classes.grow}>
            <AppBar className={classes.appBar}>
                <Toolbar>


                    <img className={classes.logoImage} src="images/logos/logo-neutral.png" title="Holliday Tours Logo" />
                    <Typography className={classes.logoText}><Link to="/">Holliday Tours</Link></Typography>


                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.searchInputRoot,
                                input: classes.searchInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Hidden smDown>
                        <div>

                            <Typography className={classes.root}>
                                <Link className={classes.link} to="/">Home</Link>
                                <Link className={classes.link} to="/tours">Tours</Link>
                                <Link className={classes.link} to="/city-walks">City Walks</Link>
                                <Link className={classes.link} to="/about">About</Link>
                                {authData && authData.isAuthenticated ?

                                    <UserDekstopDropdown />

                                    :
                                    <>
                                        <Button onClick={() => dispatch(openModal('AUTH'))} variant="outlined" color="secondary">Log In</Button>
                                        <Button onClick={() => dispatch(openModal('AUTH'))} variant="contained" color="secondary">Sign Up</Button>
                                    </>
                                }
                            </Typography>
                        </div>
                    </Hidden>

                    <Hidden mdUp>
                        <IconButton

                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>

                {/* Mobile menu */}
                <Hidden mdUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        onClose={handleDrawerToggle}
                    >

                        <div>
                            {authData && authData.isAuthenticated ?
                                "True" :
                                <AccountCircleIcon />
                            }
                            <Typography>Log in now</Typography>
                            <Typography>You're not logged in</Typography>
                        </div>

                        <Link className={classes.link} to="/">Home</Link>
                        <Link className={classes.link} to="/tours">Tours</Link>
                        <Link className={classes.link} to="/about">About</Link>
                    </Drawer>
                </Hidden>
            </AppBar>
        </div>
    );
}

export default HTHeader;

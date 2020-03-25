import React, { useState, useContext } from 'react';

import {
    AppBar,
    Toolbar,
    Drawer,
    Hidden,
    IconButton,
    Typography,
    Button,
    Link,
    InputBase,
    MenuItem,
    CardMedia,
    Menu,
} from '@material-ui/core';

import { MenuIcon, SearchIcon } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { AuthContext } from './../../context/ContextAuth';

import useStyles from './styles';
import { UserDekstopDropdown } from './sub-components';


function Header() {
    const classes = useStyles();
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
                <Toolbar className={classes.container}>


                    <img className={classes.logoImage} src="images/logos/logo-neutral.png" title="Holliday Tours Logo" />
                    <Typography className={classes.logoText}><Link href="/" color="inherit">Holliday Tours</Link></Typography>


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
                                <Link href="/" color="inherit">Home</Link>
                                <Link href="/tours" color="inherit">Tours</Link>
                                <Link href="/about" color="inherit">About</Link>
                                {authData && authData.isAuthenticated ?

                                    <UserDekstopDropdown />

                                    :
                                    <>
                                        <Button variant="outlined" color="secondary">Log In</Button>
                                        <Button variant="contained" color="secondary">Sign Up</Button>
                                    </>
                                }
                            </Typography>
                        </div>
                    </Hidden>

                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
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

                        <Link href="/" color="inherit">Home</Link>
                        <Link href="/tours" color="inherit">Tours</Link>
                        <Link href="/about" color="inherit">About</Link>
                    </Drawer>
                </Hidden>
            </AppBar>
        </div>
    );
}

export default Header;

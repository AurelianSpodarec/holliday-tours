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
    MenuItem
} from '@material-ui/core';
import { Menu, Search, AccountCircle } from "@material-ui/icons";

import { AuthContext } from './../../context/ContextAuth';

import useStyles from './styles';

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

    const renderUserDropdown = (
        <Menu
            // anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            // id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={userMenuOpen}
            onClose={handleUserMenuToggle}
        >
            <MenuItem onClick={handleUserMenuToggle}>Profile</MenuItem>
            <MenuItem onClick={handleUserMenuToggle}>My account</MenuItem>
        </Menu>
    )

    return (

        <div className={classes.grow}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.container}>

                    <Typography className={classes.logoText}><Link href="/">Holliday Tours</Link></Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Hidden smDown>
                        <div>

                            <Typography className={classes.root}>
                                <Link href="/">Home</Link>
                                <Link href="/tours">Tours</Link>
                                <Link href="/about">About</Link>
                                {authData && authData.isAuthenticated ?
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
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>

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
                        <div className={classes.appResponsive}>
                            A
                    </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        </div>
    );
}

export default Header;

import React, { useState } from "react";

import {
    FormControl,
    FilledInput,
    IconButton,
    InputLabel,
    InputAdornment,
    Iconbutton,
    TextField,
    Input,
    Button
} from '@material-ui/core/';

import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';

import useStyles from './styles';


function HTAuthLogin() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        email: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div>
            {/* Login */}
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="login-email">Email address</InputLabel>
                    <FilledInput
                        id="login-email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant="filled">
                    <InputLabel htmlFor="login-password">Password</InputLabel>
                    <FilledInput
                        id="login-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button>Login</Button>
            </form>


        </div>
    )
}

export default HTAuthLogin;
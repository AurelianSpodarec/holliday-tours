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

import { handleOnSignup, handleOnLogin } from "../../services/auth";

import useStyles from './styles';


function HTAuthModal({ children }) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstName: '',
        password: '',
        email: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function onRegister() {
        await handleOnSignup({ firstName: "Aurelian", email: "asd@gmail.com", password: "asdasdasd" })
    }

    async function onLogin() {
        await handleOnLogin({ email: "asd@gmail.com", password: "asdasdasd" })
    }


    return (
        <div>

            {/* Login with FB */}
            <form className={classes.root} noValidate autoComplete="off">


                <Button onClick={() => onRegister()}>Register</Button>
            </form>
            {/* Login */}
            <form className={classes.root} noValidate autoComplete="off">

                <Button onClick={onLogin}>Login</Button>
            </form>


        </div>
    )
}

export default HTAuthModal;
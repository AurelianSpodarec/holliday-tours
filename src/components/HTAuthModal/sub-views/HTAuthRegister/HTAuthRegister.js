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

const INITIAL_STATE = {
    firstName: '',
    password: '',
    email: '',
}

function HTAuthRegister() {
    const classes = useStyles();
    const [values, setValues] = useState()

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

            <h2>Register</h2>


        </div>
    )
}

export default HTAuthRegister;
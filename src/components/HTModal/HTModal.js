import React, { useState } from "react";

import { Modal, Fade, Backdrop} from '@material-ui/core/';

import useStyles from './styles';


function HTModal ({children}) {
    const classes = useStyles();

    // Add Redux/ context API

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    {children}
                </div>
            </Fade>
        </Modal>
    )
   
}

export default HTModal;
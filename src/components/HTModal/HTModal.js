import React, { useState } from "react";

import { Modal, Fade, Backdrop } from "@material-ui/core/";

import HTAuthModal from "../HTAuthModal/HTAuthModal";
import { useSelector, useDispatch } from "react-redux";


import { openModal, closeModal } from './../../store/actions/HTModalActions';

import useStyles from "./styles";
import HTTestModal from "../HTTestModal/HTTestModal";


const MODAL_COMPONENTS = {
    'AUTH': HTAuthModal,
    'TEST': HTTestModal
};

const HTModal = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    console.log(modal.modalOpen, "modal");

    if (!modal.modalType) return null;

    const SpecificModal = MODAL_COMPONENTS[modal.modalType];
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={modal.modalOpen}
            onClose={() => dispatch(closeModal(modal.modalType))}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={modal.modalOpen}>
                <div className={classes.paper}>
                    <SpecificModal />
                </div>
            </Fade>
        </Modal>
    );
};

export default HTModal;

// export default connect(
//   state => state.modal
// )(HTModal)

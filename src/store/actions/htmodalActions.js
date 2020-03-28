export const openModal = (name) => {
    return {
        type: 'OPEN_MODAL',
        payload: name
    }
}

export const closeModal = (name) => {
    return {
        type: 'CLOSE_MODAL',
        payload: name
    }
}
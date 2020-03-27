export const openModal = () => {
    return {
        type: 'OPEN_MODAL',
        payload: item
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
        id
    }
}
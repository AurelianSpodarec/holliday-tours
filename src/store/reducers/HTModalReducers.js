const initialState = {
    modalType: null,
    modalOpen: false,
    modalProps: {}
}

function HTModalReducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                modalType: action.payload,
                modalOpen: true
            }
        case 'CLOSE_MODAL':
            return initialState
        default:
            return state
    }
}

export default HTModalReducer;
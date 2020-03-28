const initialState = {
    modalType: null,
    modalOpen: false,
    modalProps: {}
}

function HTModalReducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            console.log("Open modal")
            return {
                modalType: action.payload,
                modalOpen: true
            }
        case 'CLOSE_MODAL':
            console.log("Close modal")
            return {
                modalType: action.payload,
                modalOpen: false
            }
        default:
            return state
    }
}

export default HTModalReducer;
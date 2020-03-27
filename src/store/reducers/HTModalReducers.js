const initialState = {
    modalType: null,
    modalProps: {}
  }
  
function HTModalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case 'HIDE_MODAL':
            return initialState
        default:
            return state
    }
}

export default HTModalReducer;
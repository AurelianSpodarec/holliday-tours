import { combineReducers } from 'redux';

import HTModalReducer from './HTModalReducers';

const rootReducers = combineReducers({
    modal: HTModalReducer
})

export default rootReducers;
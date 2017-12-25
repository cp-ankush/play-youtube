import {combineReducers} from 'redux';
import SearchReducer from '../reducers/SearchReducer';
import ConnectReducer from '../reducers/ConnectReducer';
import { reducer as reduxFormReducer } from 'redux-form';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    form: reduxFormReducer,
    searchDetails: SearchReducer,
    accessTokenRequest: ConnectReducer
});

export default allReducers;

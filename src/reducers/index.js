import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import modalUI from 'reducers/modalUI';
import appUI from 'reducers/appUI';

const rootReducer = (history) => combineReducers({
    modalUI,
    appUI,
    router: connectRouter(history)
});

export default rootReducer
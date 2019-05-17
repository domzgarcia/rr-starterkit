import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import modalUI from 'reducers/modalUI';

const rootReducer = (history) => combineReducers({
    modalUI,
    router: connectRouter(history)
});

export default rootReducer
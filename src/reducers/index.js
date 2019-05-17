import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import appUI from './appUI/index';

const rootReducer = (history) => combineReducers({
    appUI,
    router: connectRouter(history)
});

export default rootReducer
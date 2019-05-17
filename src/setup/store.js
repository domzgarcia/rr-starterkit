import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from 'reducers/index';
import thunk from 'redux-thunk';

export const history = createBrowserHistory()

const middleware = [
    thunk,
    routerMiddleware(history)
  ]
  function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
      // History
      rootReducer(history),
      // State
      preloadedState,
      // Middleware
      composeEnhancer(
        applyMiddleware(...middleware),
      ),
    )
    return store
  }
  
  const store = configureStore()
  export default store
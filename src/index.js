import React from 'react';
import ReactDOM from 'react-dom';
import store, {history} from './setup/store'
import {Provider} from 'react-redux';
import Setup from './setup';

// Aesthetics
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Setup history={history}/>
    </Provider>,
    document.getElementById('root')
);









// # import * as serviceWorker from './serviceWorker';
// # If you want your app to work offline and load faster, you can change
// # unregister() to register() below. Note this comes with some pitfalls.
// # Learn more about service workers: https://bit.ly/CRA-PWA
// # serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './redux/store/store';
import { Provider } from 'react-redux'

let initstate = [];

const store = configureStore(initstate);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

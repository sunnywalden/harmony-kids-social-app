import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes/AppRoutes';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
);
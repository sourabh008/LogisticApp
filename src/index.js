import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware ,compose} from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';

import {reducer} from './redux/reducer'
import App from './App';
import rootSaga from "./redux/sagas"

import './index.css';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
{    console.log(store.getState())
}    <App />
    </Provider>,
  document.getElementById('root')
);



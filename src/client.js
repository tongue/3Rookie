import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import rootReducer from './reducers';
import Layout from './components/Layout';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	applyMiddleware(...[thunk, logger]),
));
/* eslint-enable */

// const store = createStore(rootReducer, applyMiddleware(...[thunk, logger]));

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('app'),
);


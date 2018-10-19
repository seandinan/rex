import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers/rootReducer';

const history = createBrowserHistory();

const INITIAL_STATE = {};

const middlewares = [ routerMiddleware(history), thunk ];
const enhancers = [ applyMiddleware(...middlewares) ];

const hasDevtools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = hasDevtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
	connectRouter(history)(rootReducer),
	INITIAL_STATE,
	composeEnhancers(...enhancers),
);

export default store;

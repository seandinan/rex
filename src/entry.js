import 'preact/debug';
import React from 'react';
import { render as ReactDOMRender } from 'preact-compat';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

/* REPLACE WITH YOUR INDEX ROUTE */
const Placeholder = () => (
	<div style={{marginTop: '5%', fontSize: '30px', color: 'hsl(0, 0%, 33%)', textAlign: 'center'}}>
		Rex app is up n running!
	</div>
);

const Routing = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Placeholder} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOMRender(<Routing store={store} />, document.getElementById('app'));

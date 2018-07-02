import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.js';
// components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// routes
import router from '../routes/router';
// styles
import '../static/css/reset.css';

class App extends Component {
	render() {
		let routes = router.routes.map(({ path, component, exact }, i) =>
			<Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
		);
		let redirects = router.redirects.map(({ from, to, status }, i) =>
			<RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
		);
		return (
			<React.Fragment>
				<Header />
				<Switch>
					{routes}
					{redirects}
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}
export default App;
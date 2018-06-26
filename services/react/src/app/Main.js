//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import NotFound from '../app/NotFound';
import Home from '../app/Home';
import Gear from '../app/Gear';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact={true} pattern="/" component={Home} />
					<Route exact={true} pattern="/Gear" component={Gear} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;
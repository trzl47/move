//Libs
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// components
import Login from './Login.js';
// styles
import '../../static/css/header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};

		this.handleClick = this.toggleLogin.bind(this);
	}

	toggleLogin(event) {
		event.preventDefault();
		this.setState({ toggle: !this.state.toggle });
	}


	render () {
		const pathname = () => {
			return (
				this.props.location.pathname === '/' ?
					'' : this.props.location.pathname.substr(1,this.props.location.pathname.length)
			);
		};

		return (
			<div className='header'>
				<h1 className='logo'>Move <span>{pathname()}</span></h1>
				<div className="pull-right">
					<div className='login'>
						<p onClick={(e) => this.toggleLogin(e)}>Login</p>
						<div className={`login-menu ${this.state.toggle}`}>
							<Login />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
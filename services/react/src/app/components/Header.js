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
				<h1 className='logo'>Move <span className='page'>{pathname()}</span></h1>
				<div className="pull-right">
					<div className='login'>
						<label className='label login-toggle'>Login
							<input
								name="login-toggle"
								className='input login-toggle'
								type="checkbox"
								checked={this.state.toggle}
								onChange={(e) => this.toggleLogin(e)}>
							</input>
						</label>
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
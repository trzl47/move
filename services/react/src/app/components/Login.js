//Libs
import React, { Component } from 'react';
// styles
import '../../static/css/login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'Email',
			password: 'Password',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if (event.target.matches('.loginfield.email')) {
			this.setState({ email: event.target.value });
		}
		if (event.target.matches('.loginfield.password')) {
			this.setState({ password: event.target.value });
		}
	}

	handleSubmit(event) {
		alert('Login form submitted!');
		console.log('Login form submitted');
		event.preventDefault();
	}

	render() {
		return(
			<React.Fragment>
				<form action='' onSubmit={this.handleSubmit} className='login-form'>
					<div className='login'>
						<input
							type='text'
							name='email'
							className='loginfield email'
							value={this.state.email}
							onFocus={e => e.target.select()}
							onChange={this.handleChange}>
						</input>
						<input
							type='text'
							name='password'
							className='loginfield password'
							value={this.state.password}
							onFocus={e => e.target.select()}
							onChange={this.handleChange}>
						</input>
						<input type="submit" value="Sign In" />
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default Login;
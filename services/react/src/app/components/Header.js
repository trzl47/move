//Libs
import React from 'react';
import { withRouter } from 'react-router-dom';
// components
// styles
import '../../static/css/header.css';

const Header = props => {
	const pathname = props.location.pathname === '/' ? '' : props.location.pathname.substr(1,props.location.pathname.length);
	return(
		<div className='header'>
			<h1>Move <span>{pathname}</span></h1>
			<div className="pull-right">
				<div className='login'>
					<p>Login</p>
					<div className='dropdown-menu' style={{display: 'none'}}>
						<h3>Log in to MOVE</h3>
						<form>
							<div className="form-group"> <input type="email" className="form-control" id="email" placeholder="Email" /> </div>
							<div className="form-group"> <input type="password" className="form-control" id="password" placeholder="Password" /> </div>
							<button type="submit" className="btn">Sign in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
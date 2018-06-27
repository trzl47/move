//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import '../../static/css/footer.css';

class Premium extends Component {
	render() {
		return(
			<div className='footer'>
			<div className='container'>
				<h2>Stop scrolling. Start moving</h2>
				<Link className='btn' to="/Gear">Start Now</Link>
			</div>
		</div>
		);
	}
}

export default Premium;
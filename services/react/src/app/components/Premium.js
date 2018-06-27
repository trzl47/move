//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import '../../static/css/supporting.css';

class Premium extends Component {
	render() {
		return(
			<div className='supporting'>
			<div className='container'>
				<h2>Go Premium</h2>
				<p>Receive recommendations based on your activity to level up.</p>
				<Link className='btn' to="/Gear">Learn More</Link>
			</div>
		</div>
		);
	}
}

export default Premium;
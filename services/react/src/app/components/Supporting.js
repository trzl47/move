//Libs
import React, { Component } from 'react';
// styles
import '../../static/css/supporting.css';

class Supporting extends Component {
	render() {
		return(
			<div className='supporting'>
				<div className='container'>
					<div className='col'>
						<h2>Move</h2>
						<p>Become more active by tracking your runs, rides, and walks.</p>
					</div>
					<div className='col'>
						<h2>Sync</h2>
						<p>Access your activity on your phone, tablet, or computer.</p>
					</div>
					<div className='col'>
						<h2>Compete</h2>
						<p>Set personal challenges and see how you ranks against your friends.</p>
					</div>
					<div className='clearfix'></div>
				</div>
			</div>
		);
	}
}

export default Supporting;
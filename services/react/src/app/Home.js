//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import '../static/css/move.css';

// var main = function() {
// 	var cities = ['Tokyo', 'Seoul', 'Mexico City', 'New York', 'Mumbai', 'Jakarta', 'Sao Paulo', 'Delhi', 'Keihanshin', 'Shanghai', 'Manila', 'Hong Kong', 'Los Angeles', 'Kolkata', 'Moscow', 'Cairo', 'Buenos Aires', 'London', 'Beijing', 'Karachi'];
// 	$( "#search" ).autocomplete({source: cities });
// };
//
// $(document).ready(main);
class Home extends Component {
	render() {
		return(
			<div className={['move'].join(' ')}>
				<div className={['main'].join(' ')}>
					<div className={['container'].join(' ')}>
						<h1>Move</h1>
						<p>Form healthy habits to take your fitness to the next level.</p>
						<form className="form-horizontal">
							<div className="form-group">
								<input type="text" className="form-control ui-autocomplete-input" id="search" placeholder="Find your city" autoComplete="off" />
							</div>
						</form>
					</div>
				</div>
				<div className={['supporting'].join(' ')}>
					<div className={['container'].join(' ')}>
						<div className={['col'].join(' ')}>
							<h2>Move</h2>
							<p>Become more active by tracking your runs, rides, and walks.</p>
						</div>
						<div className={['col'].join(' ')}>
							<h2>Sync</h2>
							<p>Access your activity on your phone, tablet, or computer.</p>
						</div>
						<div className={['col'].join(' ')}>
							<h2>Compete</h2>
							<p>Set personal challenges and see how you ranks against your friends.</p>
						</div>
						<div className={['clearfix'].join(' ')}></div>
					</div>
				</div>
				<div className={['feature'].join(' ')}>
					<div className={['container'].join(' ')}>
						<h2>Move. Rest. Recover. Move.</h2>
					</div>
				</div>
				<div className={['supporting'].join(' ')}>
					<div className={['container'].join(' ')}>
						<h2>Go Premium</h2>
						<p>Receive recommendations based on your activity to level up.</p>
						<Link className={['btn'].join(' ')} to="/Gear">Learn More</Link>
					</div>
				</div>
				<div className={['footer'].join(' ')}>
					<div className={['container'].join(' ')}>
						<h2>Stop scrolling. Start moving</h2>
						<Link className={['btn', ''].join(' ')} to="/Gear">Start Now</Link>
					</div>
				</div>
				{/* <ul className={['ui-autocomplete','ui-front','ui-menu','ui-widget','ui-widget-content'].join(' ')} id="ui-id-1" tabIndex="0" style={['display: none; position: relative, top: -1968.38px, left: 790px, width: 322px,']}>
					<li className={'ui-menu-item'} id="ui-id-41" tabIndex="-1">Tokyo</li>
					<li className={'ui-menu-item'} id="ui-id-42" tabIndex="-1">New York</li>
					<li className={'ui-menu-item'} id="ui-id-43" tabIndex="-1">Jakarta</li>
					<li className={'ui-menu-item'} id="ui-id-44" tabIndex="-1">Keihanshin</li>
					<li className={'ui-menu-item'} id="ui-id-45" tabIndex="-1">Hong Kong</li>
					<li className={'ui-menu-item'} id="ui-id-46" tabIndex="-1">Kolkata</li>
					<li className={'ui-menu-item'} id="ui-id-47" tabIndex="-1">Karachi</li>
				</ul>
				<span role="status" aria-live="assertive" aria-relevant="additions" className={'ui-helper-hidden-accessible'}>
					<div style={{display: 'none'}}>Tokyo</div>
					<div style={{display: 'none'}}>New York</div>
					<div style={{display: 'none'}}>Jakarta</div>
					<div style={{display: 'none'}}>Keihanshin</div>
					<div style={{display: 'none'}}>Karachi</div>
					<div style={{display: 'none'}}>Kolkata</div>
					<div style={{display: 'none'}}>Hong Kong</div>
					<div style={{display: 'none'}}>Keihanshin</div>
					<div style={{display: 'none'}}>Jakarta</div>
					<div style={{display: 'none'}}>New York</div>
				</span> */}
			</div>
		);
	}
}
export default Home;
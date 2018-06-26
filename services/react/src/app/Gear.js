//Libs
import React, { Component } from 'react';
// Components
// styles
import '../static/css/moveGear.css';

// var main = function() {
// 	$('.login p').click(function() {
// 		$('.dropdown-menu').toggle();
// 	});
//
// 	$("#accordion").accordion();
// };

// $(document).ready(main);
class Gear extends Component {
	render() {
		return(
			<div className='moveGear'>
				<div className='header'>
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<h1>Move <span>Gear</span></h1>
							</div>
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
					</div>
				</div>
				<div className='main'>
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div id="accordion" className='ui-accordion ui-widget ui-helper-reset' role="tablist">
									<h3 className='ui-accordion-header ui-state-default ui-accordion-icons ui-corner-all' role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="-1">
										<span className='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e'></span>
										Featured
									</h3>
									<div className='ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom'
										id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true"
										style={{display: 'none', height: '76px'}}>
										<ul>
											<li>Holiday Gift Guide</li>
											<li>New Releases</li>
											<li>Launch Calendar</li>
										</ul>
									</div>
									<h3 className='ui-accordion-header ui-state-default ui-accordion-icons ui-corner-all' role="tab" id="ui-id-3" aria-controls="ui-id-4" aria-selected="false" aria-expanded="false" tabIndex="-1">
										<span className='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e'></span>
										Shoes
									</h3>
									<div className='ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom' id="ui-id-4" aria-labelledby="ui-id-3" role="tabpanel" aria-hidden="true" style={{display: 'none', height: '76px'}}>
										<ul>
											<li>Basketball</li>
											<li>Football</li>
											<li>Training</li>
										</ul>
									</div>
									<h3 className='ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top' role="tab" id="ui-id-5" aria-controls="ui-id-6" aria-selected="true" aria-expanded="true" tabIndex="0">
										<span className='ui-accordion-header-icon ui-icon ui-icon-triangle-1-s'></span>
										Clothing
									</h3>
									<div className='ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active' id="ui-id-6" aria-labelledby="ui-id-5" role="tabpanel" aria-hidden="false" style={{display: 'block', height: '76px'}}>
										<ul>
											<li>Mens</li>
											<li>Womens</li>
											<li>Kids</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='supporting'>
					<div className="container">
						<h2>Better. Faster. Stronger. You</h2>
						<p>A wide range of sporting gear especially designed to maximize your performance.</p>
					</div>
				</div>
				<div className='feature'>
				</div>
				<div className='footer'>
					<div className="container">
						<ul>
							<li>Gift Cards</li>
							<li>Find a city</li>
							<li>Become a member</li>
							<li>Contact us</li>
						</ul>
						<p>MOVE</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Gear;

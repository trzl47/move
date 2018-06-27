//Libs
import React, { Component } from 'react';
// styles
import '../../static/css/banner.css';

class Banner extends Component {
	render() {
		return(
			<div className='banner'>
				<h1>Move</h1>
				<p>Form healthy habits to take your fitness to the next level.</p>
				<form className="city-search-form">
					<input type="text"
						className="search-field"
						placeholder="Find your city"
						autoComplete="off" />
				</form>
			</div>
		);
	}
}

export default Banner;
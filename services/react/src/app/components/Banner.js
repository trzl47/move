//Libs
import React, { Component } from 'react';
// components
import CitySearch from './CitySearch.js';
// styles
import '../../static/css/banner.css';

class Banner extends Component {
	render() {
		return(
			<div className='banner'>
				<h1>Move</h1>
				<p>Form healthy habits to take your fitness to the next level.</p>
				<CitySearch />
			</div>
		);
	}
}

export default Banner;
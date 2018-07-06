//Libs
import React from 'react';
// components
import CitySearch from './CitySearch';
// styles
import '../../static/css/banner.css';

const Banner = () => {
	return(
		<div className='banner'>
			<h1>Move</h1>
			<p>Form healthy habits to take your fitness to the next level.</p>
			<CitySearch />
		</div>
	);
};

export default Banner;
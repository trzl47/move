//Libs
import React from 'react';
// helpers
import backgrounds from '../helpers/backgroundImages.js';
// styles
import '../../static/css/hero.css';


const Hero = props => {
	// find correct url to match with
	const urlmatch = backgrounds.filter((url) => {
		return url === props.content[0].backgroundImage;
	});

	return (
		<div className='hero'
		style={{
			'backgroundSize': 'cover',
			'backgroundImage': `url(${urlmatch[0]}`
		}}>
			<h2> { props.content[0].header } </h2>
		</div>
	);
};

export default Hero;
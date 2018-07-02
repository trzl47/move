//Libs
import React from 'react';
// styles
import '../../static/css/hero.css';

// getting all Heor background images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../static/img/', false, /\.(png|jpg|svg)$/));

const Hero = props => {
	// find correct url to match with
	const urlmatch = images.filter((url) => {
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
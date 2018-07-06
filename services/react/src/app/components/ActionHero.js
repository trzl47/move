//Libs
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import '../../static/css/actionhero.css';

// getting all Heor background images
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../static/img/', false, /\.(png|jpg|svg)$/));

const ActionHero = props => {
	// find correct url to match with
	const urlmatch = images.filter((url) => {
		return url === props.content[0].backgroundImage;
	});

	return (
		<div className='actionhero'
		style={{
			'backgroundSize': 'cover',
			'backgroundImage': `url(${urlmatch[0]}`
		}}>
			<h2 className='action-header'> { props.content[0].header } </h2>
			<Link className='btn' to="/Gear"> { props.content[0].prompt } </Link>
		</div>
	);
};

export default ActionHero;
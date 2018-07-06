//Libs
import React from 'react';
// styles
import '../../static/css/footer.css';
// data
import { footeractions } from '../../data/footeractions.js';

const Footer = () => {
	const footerStyle = {
		'display': 'flex',
		'flexDirection': 'row',
		'justifyContent': 'space-around',
		'alignItems': 'center',
	};

	const actions = footeractions.map((action) => {
		return (
			<a key={footeractions.indexOf(action)}
			className={`footer-action ${footeractions.indexOf(action)}`}
			href={action.link}>
				{ action.action }
			</a>
		);
	});

	return(
		<div className='footer' style={footerStyle}>
			{ actions }
			<h1 className='footer-header'>MOVE</h1>
		</div>
	);
};

export default Footer;
//Libs
import React, { Component } from 'react';
// components
// styles
// import '../../static/css/banner.css';

const SupportBlock = props => {
	return(
		<div className='supportblock'>
			<h2>{props.header}</h2>
			<p>{props.content}</p>
		</div>
	);
};

export default SupportBlock;
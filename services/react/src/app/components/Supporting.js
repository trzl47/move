//Libs
import React from 'react';
// components
import SupportBlock from './SupportBlock.js';
// styles
import '../../static/css/supporting.css';

const Supporting = props => {
	const supportblocks = props.blocks.map((block) => {
		return (
			<SupportBlock
			key={props.blocks.indexOf(block)}
			header={block.header}
			content={block.content} />
		);
	});

	return(
		<div className='supporting'>
			{ supportblocks }
		</div>
	);
};

export default Supporting;
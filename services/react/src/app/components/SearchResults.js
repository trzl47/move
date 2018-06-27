//Libs
import React, { Component } from 'react';
// styles
import '../../static/css/searchresults.css';

class SearchResults extends Component {
	render() {
		return(
			<React.Fragment>
				<ul className='' id="" tabIndex="0"
					style='display: none; position: relative, top: -1968.38px, left: 790px, width: 322px,'>
					<li className='ui-menu-item' id="ui-id-41" tabIndex="-1">Tokyo</li>
					<li className='ui-menu-item' id="ui-id-42" tabIndex="-1">New York</li>
					<li className='ui-menu-item' id="ui-id-43" tabIndex="-1">Jakarta</li>
					<li className='ui-menu-item' id="ui-id-44" tabIndex="-1">Keihanshin</li>
					<li className='ui-menu-item' id="ui-id-45" tabIndex="-1">Hong Kong</li>
					<li className='ui-menu-item' id="ui-id-46" tabIndex="-1">Kolkata</li>
					<li className='ui-menu-item' id="ui-id-47" tabIndex="-1">Karachi</li>
				</ul>
				<span role="status" aria-live="assertive" aria-relevant="additions" className='ui-helper-hidden-accessible'>
					<div style={{display: 'none'}}>Tokyo</div>
					<div style={{display: 'none'}}>New York</div>
					<div style={{display: 'none'}}>Jakarta</div>
					<div style={{display: 'none'}}>Keihanshin</div>
					<div style={{display: 'none'}}>Karachi</div>
					<div style={{display: 'none'}}>Kolkata</div>
					<div style={{display: 'none'}}>Hong Kong</div>
					<div style={{display: 'none'}}>Keihanshin</div>
					<div style={{display: 'none'}}>Jakarta</div>
					<div style={{display: 'none'}}>New York</div>
				</span>
			</React.Fragment>
		);
	}
}

export default SearchResults;
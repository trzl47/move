//Libs
import React, { Component } from 'react';
// styles
import '../../static/css/searchresults.css';

const SearchResults = props => {
	const cities = props.matches.map((match) => {
		return (
			<div role="status"
				aria-live="assertive"
				aria-relevant="additions"
				className={`cityresult ${props.matches.indexOf(match)}`}
				key={props.matches.indexOf(match)}>
				{ match }
			</div>
		);
	});

	return cities;
};

export default SearchResults;
//Libs
import React from 'react';
// styles
import '../../static/css/searchresults.css';

const SearchResults = props => {
	const cities = props.matches.map((match) => {
		return (
			<li role="status"
				aria-live="assertive"
				aria-relevant="additions"
				className={`cityresult ${props.matches.indexOf(match)}`}
				key={props.matches.indexOf(match)}>
				{ match }
			</li>
		);
	});

	return cities;
};

export default SearchResults;
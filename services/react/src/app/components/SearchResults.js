//Libs
import React from 'react';
// styles
import '../../static/css/searchresults.css';

const SearchResults = props => {
	const cities = props.matches.map((match) => {
		return (
			<button role="status"
				aria-live="assertive"
				aria-relevant="additions"
				className={`cityresult ${props.matches.indexOf(match)}`}
				key={props.matches.indexOf(match)}>
				{ match }
			</button>
		);
	});

	return cities;
};

export default SearchResults;
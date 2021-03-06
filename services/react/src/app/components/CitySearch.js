//Libs
import React, { Component } from 'react';
// components
import SearchResults from './SearchResults.js';
// styles
import '../../static/css/citysearch.css';
// data
import cities from '../../data/cities.js';

class CitySearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: 'FIND YOUR CITY',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if (event.target.matches('.field.city')) {
			this.setState({ city: event.target.value });
		}
	}

	handleSubmit(event) {
		alert('Contact Form Submitted!');
	}

	render() {
		const matches = cities.filter((city) => {
			// create regexp for entered city
			const searchName = this.state.city === '' ?
					'zzzz' : new RegExp(this.state.city.toUpperCase(), 'g');

			return city.toUpperCase().match(searchName);
		});

		return(
			<React.Fragment>
				<form action='' onSubmit={this.handleSubmit} className='citysearch-form'>
					<div className='citysearch'>
						<input
							type='text'
							name='city'
							className='field city'
							value={this.state.city}
							onFocus={e => e.target.select()}
							onChange={this.handleChange}>
						</input>
					</div>
					<div className='results-block'
					style={
						matches.length > 0 ? {'padding' : '10px'} : {'padding' : '0'}
					}>
						<SearchResults matches={matches} />
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default CitySearch;
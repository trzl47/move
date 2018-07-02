//Libs
import React, { Component } from 'react';
// components
import AccordionOption from './AccordionOption.js';
// styles
import '../../../static/css/submenu.css';

class AccordionSubmenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.handleClick = this.toggleSubmenu.bind(this);
	}

	toggleSubmenu(event) {
		event.preventDefault();
		let classes = [...event.target.classList];
		console.log(classes);
		if (classes.includes('open')) {
			event.target.classList.add('closed');
			event.target.classList.remove('open');
		}
		else if (classes.includes('closed')) {
			event.target.classList.add('open');
			event.target.classList.remove('closed');
		}

		console.log(classes);
	}

	render () {
		const menuoptions = this.props.submenu.options.map((option) => {
			return (
				<AccordionOption
				key={this.props.submenu.options.indexOf(option)}
				option={option} />
			);
		});

		return(
			<div className='accordion-submenu'>
				<h3 className='ui-accordion-header closed' onClick={(e) => this.toggleSubmenu(e)}> { this.props.submenu.header } </h3>
				<div className='ui-accordion-content'>
					{ menuoptions }
				</div>
			</div>
		);
	}
}

export default AccordionSubmenu;
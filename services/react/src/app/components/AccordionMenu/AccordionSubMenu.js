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
			toggle: false
		};

		this.handleClick = this.toggleSubmenu.bind(this);
	}

	toggleSubmenu(event) {
		event.preventDefault();
		this.setState({ toggle: !this.state.toggle });
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
				<h3 className='ui-accordion-header' onClick={(e) => this.toggleSubmenu(e)}> { this.props.submenu.header } </h3>
				<div className={`ui-accordion-content ${this.state.toggle}`}>
					{ menuoptions }
				</div>
			</div>
		);
	}
}

export default AccordionSubmenu;
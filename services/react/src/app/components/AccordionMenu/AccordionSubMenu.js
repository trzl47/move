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
				<label className='label submenu-toggle ui-accordion-header'> { this.props.submenu.header }
					<input
						name="submenu-toggle"
						className='input submenu-toggle '
						type="checkbox"
						checked={this.state.toggle}
						onChange={(e) => this.toggleSubmenu(e)}>
					</input>
				</label>
				<div className={`ui-accordion-content ${this.state.toggle}`}>
					{ menuoptions }
				</div>
			</div>
		);
	}
}

export default AccordionSubmenu;
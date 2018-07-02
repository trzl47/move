//Libs
import React, { Component } from 'react';
// components
import AccordionSubmenu from './AccordionSubMenu.js';
// styles
import '../../../static/css/accordionmenu.css';

const AccordionMenu = props => {
	const submenus = props.menu.map((submenu) => {
		return (
			<AccordionSubmenu
			key={props.menu.indexOf(submenu)}
			submenu={submenu} />
		);
	});

	return(
		<div className='accordion-menu'>
			{ submenus }
		</div>
	);
};

export default AccordionMenu;
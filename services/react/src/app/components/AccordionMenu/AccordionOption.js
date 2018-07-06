//Libs
import React, { Component } from 'react';
// styles
import '../../../static/css/menuoption.css';

const MenuOption = props => {
	return(
		<a className='accordion-option' href='/#'>{ props.option }</a>
	);
};

export default MenuOption;
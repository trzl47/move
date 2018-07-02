//Libs
import React, { Component } from 'react';
// Components
import Supporting from './components/Supporting.js';
import Hero from './components/Hero.js';
import AccordionMenu from './components/AccordionMenu/AccordionMenu';
// styles
import '../static/css/moveGear.css';
// data
import { GearSupport } from '../data/supportblocks.js';
import { GearHero, GearHero2 } from '../data/herobanners.js';
import { GearMenu } from '../data/submenus.js';

const GearPage = () => {
	return(
		<div className='moveGear'>
			<AccordionMenu menu={GearMenu} />
			<Hero content={GearHero} />
			<Supporting blocks={GearSupport} />
			<Hero content={GearHero2} />
		</div>
	);
};

export default GearPage;
//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components
import Banner from './components/Banner.js';
import Supporting from './components/Supporting.js';
import Hero from './components/Hero.js';
import ActionHero from './components/ActionHero.js';
// styles
import '../static/css/move.css';
// data
import { HomeSupport, HomeSupport2 } from '../data/supportblocks.js';
import { HomeAction, HomeAction2 } from '../data/actionheros.js';

const Homepage = () => {
	return(
		<div className='move'>
			<Banner />
			<Supporting blocks={HomeSupport} />
			<ActionHero content={HomeAction} />
			<Supporting blocks={HomeSupport2} />
			<ActionHero content={HomeAction2} />
		</div>
	);
};

export default Homepage;
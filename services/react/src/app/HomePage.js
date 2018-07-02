//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components
import Banner from './components/Banner.js';
import Supporting from './components/Supporting.js';
import Hero from './components/Hero.js';
// styles
import '../static/css/move.css';
// data
import { HomeSupport, HomeSupport2 } from '../data/supportblocks.js';
import { HomeHero, HomeHero2 } from '../data/herobanners.js';

const Homepage = () => {
	return(
		<div className='move'>
			<Banner />
			<Supporting blocks={HomeSupport} />
			<Hero content={HomeHero} />
			<div className='premium'>
				<Supporting blocks={HomeSupport2} />
				<Link className='btn' to="/Gear">Learn More</Link>
			</div>
			<span className='feature'>
				<Hero content={HomeHero2} />
				<Link className='btn' to="/Gear">Start Now</Link>
			</span>
		</div>
	);
};

export default Homepage;
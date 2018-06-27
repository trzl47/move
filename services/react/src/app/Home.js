//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components
import Banner from './components/Banner.js';
import Supporting from './components/Supporting.js';
import Feature from './components/Feature.js';
import Premium from './components/Premium.js';
import Footer from './components/Footer.js';
// styles
import '../static/css/reset.css';
import '../static/css/move.css';
// data
import cities from '../data/cities.js';

// var main = function() {
// 	$( "#search" ).autocomplete({source: cities });
// };
//
// $(document).ready(main);
class Home extends Component {
	render() {
		return(
			<div className='move'>
				<Banner />
				{/* <Supporting /> */}
				{/* <Feature /> */}
				{/* <Premium /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Home;
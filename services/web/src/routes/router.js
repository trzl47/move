// Components
import Home from '../app/Home.js';
import Gear from '../app/Gear.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: Home,
			exact: true
		},
		{
			path: '/Gear',
			component: Gear,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};
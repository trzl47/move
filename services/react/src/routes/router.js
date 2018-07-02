// Components
import GearPage from '../app/GearPage.js';
import HomePage from '../app/HomePage';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: HomePage,
			exact: true
		},
		{
			path: '/Gear',
			component: GearPage,
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
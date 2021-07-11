import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import MenuList from './components/menuList/MenuList';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import './app.scss';
import AboutMe from './components/aboutMe/AboutMe';
import Portfolio_nSkill from './components/Portfolio_nSkill/Portfolio_nSkill';

function App() {
	const [menuOpen, setMenuOpen] = useState(false); /* 1 */
	return (
		<div className='app'>
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
			<div className='sections'>
				<Intro></Intro>
				<AboutMe></AboutMe>
				{/* <Portfolio_nSkill></Portfolio_nSkill>
				<Portfolio></Portfolio>
				<Works></Works>
				<Testimonials></Testimonials> */}
				<Contact></Contact>
			</div>
		</div>
	);
}

export default App;

/*
1.
Hamburger initial state set to false. Refer Topbar.js to see how the props are being used.


*/

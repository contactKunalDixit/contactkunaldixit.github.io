import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import MenuList from './components/menuList/MenuList';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';
import './app.scss';
import AboutMe from './components/aboutMe/AboutMe';

function App() {
	const [menuOpen, setMenuOpen] = useState(false); /* 1 */
	return (
		<div className='app'>
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
			<div className='sections'>
				<Intro></Intro>
				<AboutMe></AboutMe>
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

import React, { useState } from 'react';
import './menu.scss';
// import MenuList from '../menuList/MenuList';

function Menu(props) {
	let [menuOpen, setMenuOpen] = useState(true);
	const list = [
		{
			id: 'intro',
			title: 'Home',
		},
		{
			id: 'aboutMe',
			title: 'About Me',
		},

		{
			id: 'contact',
			title: 'Contact',
		},
	];
	return (
		<div className={'menu ' + (props.menuOpen && 'active')}>
			{/*1*/}
			<ul>
				{/* 2 */}
				{/* {list.map((item) => (
					<MenuList id={item.id} title={item.title}></MenuList>
				))} */}

				<li onClick={() => props.setMenuOpen(false)}>
					<a href='#intro'>Home</a>
				</li>
				<li onClick={() => props.setMenuOpen(false)}>
					<a href='#aboutMe'>About Me</a>
				</li>

				<li onClick={() => props.setMenuOpen(false)}>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;

/*
*1:
<div vlassName = {'menu '+(props.menuOpen && 'active')} will amend className to className = "menu active" if props.menuOpen is true.

Also; Since the hamburger button has been alloted an event handler before;AND we are using the same state values;  thus when the event happens; the resulting change in the value will also trigger the above


2. 
 <MenuList setMenuOpen = {props.setMenuOpen}><a href='#intro'>Home</a></MenuList> */
/* Need to seperate as an exclusive component. All <li> elements to be clubbed together so that onCLick event handler doesnt have to be repeated.
				
				
*/

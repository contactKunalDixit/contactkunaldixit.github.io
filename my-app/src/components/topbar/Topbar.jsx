import React from 'react';
import './topbar.scss';
import { Mail, Call } from '@material-ui/icons';

function Topbar(props) {
	return (
		<div className={'topbar ' + (props.menuOpen && 'active')}>
			{/* 1 */}
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						Creation.
					</a>
					<div className='itemContainer'>
						<Call className='icon'></Call>
						<span>+65 90301206</span>
					</div>
					<div className='itemContainer'>
						<Mail className='icon'></Mail>
						<span>contactkunaldixit@gmail.com</span>
					</div>
				</div>

				<div className='right'>
					<div
						className='hamburger'
						onClick={() => {
							props.setMenuOpen(!props.menuOpen);
						}}
						/* 2 */
					>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Topbar;

/* 

1:		
<div className={'topbar ' + (props.menuOpen && 'active')}>
Adds additional className 'active' only when 1st condition i.e. props.menuOpen is true


2:
Added onClick event handler to hamburger. So on every click, the new value gets set equivalent to 'opposite of prev value'. Thus, providing the switch functionality.

*/

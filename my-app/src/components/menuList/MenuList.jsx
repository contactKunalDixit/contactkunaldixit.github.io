import React from 'react';
import '../menuList/menuList.scss';

function MenuList(props) {
	const onClickHandler = () => {
		props.setSelected(props.id);
	};

	return (
		<li
			onClick={() => {
				props.setMenuOpen(false);
			}}
		></li>
	);
}

export default MenuList;

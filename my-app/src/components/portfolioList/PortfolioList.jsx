import React from 'react';
import './portfolioList.scss';

function PortfolioList(props) {
	const onClickHandler = () => {
		props.setSelected(props.id);
	};
	return (
		<div>
			<li
				className={props.active ? 'portfolioList active' : 'portfolioList'}
				onClick={onClickHandler}
			>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{props.title}
				</a>
			</li>
		</div>
	);
}

export default PortfolioList;

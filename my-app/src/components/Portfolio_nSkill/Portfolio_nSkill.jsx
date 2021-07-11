import React from 'react';

import './portfolio_nSkill.scss';
import Portfolio from '../portfolio/Portfolio';

const Portfolio_nSkill = () => {
	return (
		<div className='Portfolio_nSkill' id='Portfolio_nSkill'>
			<div className='titleName'>
				<h1>Portfolio</h1>
			</div>
			<div className='containerMain'>
				<div className='containerLeft'>
					<Portfolio></Portfolio>
				</div>
				<div className='containerRight'>
					<h1>Skills</h1>
				</div>
			</div>
		</div>
	);
};

export default Portfolio_nSkill;

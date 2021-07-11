import React, { useState, useEffect } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';

import { featuredPortfolio } from '../../data';

function Portfolio() {
	const [selected, setSelected] = useState('featured'); //1//
	const [data, setData] = useState([]); //3.

	const list = [{ unique: 'i1', id: 'featured', title: 'Featured' }];

	useEffect(() => {
		switch (selected) {
			case 'featured':
				setData(featuredPortfolio);
				break;

			default:
				setData(featuredPortfolio);
		}
	}, [selected]); //2
	return (
		<div className='portfolio' id='portfolio'>
			<h1>Works</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						key={item.unique}
						id={item.id}
						title={item.title}
						link={item.link}
						active={selected === item.id} //2//
						setSelected={setSelected}
					></PortfolioList>
				))}
			</ul>
			<div className='container'>
				{/* //4 */}
				{data.map((d) => (
					<div className='item' key={d.id}>
						<img src={d.img} alt='' />

						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;

//1: For highlighted selection. Observe, that we are storing the current existing of the ID and Not the title.i.e. Its 'feature' and NOT 'Feature'

// Its only going to be active if current state of 'selected' equals item.id is TRUE; else its FALSE

//2 & 3 : useEffect() being used to manage data imported from data.js

//3. another useState being used to dynamically manage data coming from data.js. Initially the intial value is being left as an empty array

// 4. helps dynamically manage the elements. Only specific relevant elements appear whe the particular option is clicked

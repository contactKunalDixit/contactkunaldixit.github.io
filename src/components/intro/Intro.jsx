import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

function Intro() {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			typeSpeed: 100,
			backspeed: 50,
			backDelay: 1500,
			strings: ['Designer', 'Developer', 'Creator', 'Curator', 'Facilitator'],
		});
	}, []);

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='imgContainer'>
					<img src='assets/Coding.jpg' alt='a coding pic' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hello! </h2>
					<h1>I'm Kunal Dixit</h1>
					<h3>
						Content <span ref={textRef}></span>
					</h3>
				</div>
				<a href='#aboutMe'>
					<img src='assets/down.png' alt='' />
				</a>
			</div>
		</div>
	);
}

export default Intro;

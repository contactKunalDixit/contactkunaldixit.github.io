import React from 'react';
import './aboutMe.scss';

const AboutMe = () => {
	return (
		<div className='aboutMe' id='aboutMe'>
			<div className='container1'>
				<div className='left'>
					<div className='imgContainer'>
						<img src='assets/KunalCartoonPotrait.jpg' alt='' />
					</div>
				</div>
				<div className='right'>
					<div className='articleContainer'>
						<div className='titleBox'>
							<h1>About me</h1>
						</div>
						<div className='articleBox'>
							<ul>
								<li>
									15+ years of rich cross functional experience in Customer
									Relationship Management & retention, Direct Sales and
									Marketing, Project and process Management in the SaaS and
									Information Technology enabled Services and hospitality
									sector.
								</li>
								<li>
									Successfully contributed to and collaborated with Project
									Management and associated Technical teams in execution of
									various database projects.
								</li>
								<li>
									Exposure to relational and non-relational database mapping and
									management{' '}
								</li>
								<li>
									Adept in identifying and analysing the customer requirements
									to deliver user-centric solutions and maximizing customer
									satisfaction.
								</li>
							</ul>
						</div>
						<div className='cvDownload'>
							<a
								href='assets/Kunal_Dixit-Resume.pdf'
								download
								rel='noopener noreferrer'
							>
								<img src='assets/Download_icon.png' alt='Kunal_Dixit-Resume' />
							</a>
						</div>
						<div className='DownloadInstruct'>
							<p>Click the pdf icon to download the Resume</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

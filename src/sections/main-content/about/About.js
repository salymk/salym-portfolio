import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Salym2 from '../../../images/mountain-salym.jpg';

const About = () => {
	return (
		<div className='section has-background-white-bis'>
			<div className='container' id='about'>
				<h1 className='title is-2 mb-6 has-text-centered is-uppercase'>
					About
				</h1>
				<AboutMe />
			</div>
		</div>
	);
};

export default About;

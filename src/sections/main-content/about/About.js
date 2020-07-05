import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Salym2 from '../../../images/mountain-salym.jpg';

const About = () => {
	return (
		<div className='section'>
			<div className='container' id='about'>
				<h1 className='title has-text-centered is-1 mb-6 is-uppercase'>
					About
				</h1>
				<AboutMe />
			</div>
		</div>
	);
};

export default About;

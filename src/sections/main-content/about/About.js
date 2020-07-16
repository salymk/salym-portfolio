import React from 'react';
import AboutMe from './AboutMe';

const About = () => {
	return (
		<div className='section'>
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

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Salym2 from '../../../images/mountain-salym.jpg';

const AboutMe = () => {
	return (
		<div className='columns is-vcentered is-centered mt-6'>
			<div className='column is-3'>
				<img
					className='custom-img'
					src={Salym2}
					alt='Salym Akhmedov in the mountains'
				/>
			</div>
			<div className='column ml-2 is-5 is-mobile'>
				<h1 className='title mb-2 is-3 is-size-4-mobile has-text-centered-mobile'>
					Who Is This Guy?
				</h1>
				<div className='content has-text-centered-mobile is-size-6-mobile is-size-6-tablet is-size-6-widescreen'>
					<p className='mb-5'>
						A fast learner and highly motivated frontend web developer with
						almost two years of experience. Passionate about learning and
						coding, with a desire to apply his skills on larger development
						teams. Eager to tackle more complex projects and continue to find
						ways to maximize user experience.
						<a className='is-primary'>
							<Link
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
								offset={-100}
								duration={1000}>
								{' '}
								<span className='custom-link link-hover'>
									Let's create something great together!
								</span>
							</Link>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

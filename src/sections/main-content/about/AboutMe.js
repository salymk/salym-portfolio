import React from 'react';
import Salym2 from '../../../images/mountain-salym.jpg';

const AboutMe = () => {
	return (
		<div className='columns is-centered mt-6'>
			<div className='column is-4'>
				<img
					className='custom-img'
					src={Salym2}
					alt='Salym Akhmedov in the mountains'
				/>
			</div>
			<div className='column is-6 is-mobile'>
				<h1 className='title mb-2 is-3 is-size-4-mobile is-size-2-widescreen has-text-centered-mobile'>
					Who Is This Guy?
				</h1>
				<div className='content has-text-centered-mobile is-size-6-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen'>
					<p className='mb-5'>
						A fast learner and highly motivated frontend web developer with
						almost two years of experience. Passionate about learning and
						coding, with a desire to apply his skills on larger development
						teams. Eager to tackle more complex projects and continue to find
						ways to maximize user experience.
						<a className='has-text-primary'>
							{' '}
							Let's create something great together!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

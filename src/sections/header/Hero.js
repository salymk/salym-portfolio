import React from 'react';
import Particles from 'react-particles-js';

const Hero = () => {
	return (
		<section className='hero is-fullheight has-bg-img'>
			<div className='hero-body'>
				<div className='container has-text-centered'>
					<h1 className='title has-text-white is-size-4-mobile is-size-2-tablet mb-0'>
						Hello, I'm{' '}
						<strong className='has-text-black-ter'>Salym Akhmedov</strong>.
					</h1>
					<h1 className='title has-text-white is-size-4-mobile is-size-2-tablet'>
						I'm a frontend web developer.
					</h1>

					<button className='button is-white is-outlined is-size-5-tablet'>
						<span>Find out more</span>
						<span className='icon is-small'>
							<i className='fas fa-arrow-down'></i>
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;

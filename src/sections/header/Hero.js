import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
	return (
		<section className='hero is-fullheight has-bg-img' id='home'>
			<div className='hero-body'>
				<div className='container has-text-centered'>
					<h1 className='title has-text-white is-size-4-mobile is-size-2-tablet mb-0'>
						Hello, I'm{' '}
						<strong className='has-text-black-ter'>Salym Akhmedov</strong>.
					</h1>
					<h1 className='title has-text-white is-size-4-mobile is-size-2-tablet'>
						I'm a frontend web developer.
					</h1>

					<a className='button is-white is-outlined is-size-5-tablet'>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}>
							<span>Find out more</span>
							<span className='icon is-small'>
								<i className='fas fa-arrow-down'></i>
							</span>
						</Link>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;

import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
	return (
		<section className='hero is-fullheight has-bg-img' id='home'>
			<div className='hero-body'>
				<div className='container has-text-centered'>
					<h1 className='title has-text-white is-size-4-mobile is-size-3-tablet mb-0'>
						Hello, I'm{' '}
						<strong className='has-text-black-ter'>Salym Akhmedov</strong>.
					</h1>
					<h1 className='title  has-text-white is-size-4-mobile is-size-3-tablet'>
						I'm a frontend web developer.
					</h1>

					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}>
						<span className='button is-white is-outlined is-size-5-tablet'>
							<span>Find out more</span>
							<span className='icon is-small'>
								<i className='fas fa-arrow-down'></i>
							</span>
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	const onClick = () => {
		let toggle = document.querySelector('.navbar-burger');
		let menu = document.querySelector('.navbar-menu');
		toggle.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const isTop = window.scrollY < 560;
			if (isTop !== true) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});

		return function cleanup() {
			document.removeEventListener('scroll');
		};
	}, []);

	return (
		<nav
			className={`navbar is-white ${scrolled ? 'is-fixed-top has-shadow' : ''}`}
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand bg-color'>
				<Link
					activeClass='active'
					to='home'
					spy={true}
					smooth={true}
					offset={-100}
					duration={1000}>
					<span onClick={onClick} className='navbar-item'>
						<span className='nav-span nav-logo'>Salym Akhmedov</span>
					</span>
				</Link>

				<a
					onClick={onClick}
					role='button'
					className='navbar-burger'
					aria-label='menu'
					aria-expanded='false'>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>
			<div className='navbar-menu'>
				<div className='navbar-start is-size-5-tablet'>
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<span onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>About</span>
						</span>
					</Link>

					<Link
						activeClass='active'
						to='portfolio'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<span onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Portfolio</span>
						</span>
					</Link>

					<Link
						activeClass='active'
						to='tools'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<span onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Tools</span>
						</span>
					</Link>

					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<span onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Contact</span>
						</span>
					</Link>
				</div>
				<div className='navbar-end'>
					<div className='navbar-item mr-6'>
						<div className='field is-grouped'>
							<a
								href='mailto:khokumdarakhmedov@gmail.com'
								className='has-text-grey-darker mr-3'>
								<i className='fas fa-2x fa-envelope-square'></i>
							</a>
							<a href='tel:720-226-1054' className='has-text-grey-darker mr-3'>
								<i className='fas fa-2x fa-phone-square-alt'></i>
							</a>

							<a
								href='https://github.com/salymk'
								target='_blank'
								className='has-text-grey-darker mr-3'>
								<i className='fab fa-2x fa-github-square'></i>
							</a>

							<a
								href='https://www.linkedin.com/in/salym-akhmedov/'
								target='_blank'
								className='has-text-grey-darker'>
								<i className='fab fa-2x fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

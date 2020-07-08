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
			const isTop = window.scrollY < 575;
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
					<a onClick={onClick} className='navbar-item'>
						<span className='nav-span nav-logo'>Salym Akhmedov</span>
					</a>
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
						<a onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>About</span>
						</a>
					</Link>

					<Link
						activeClass='active'
						to='tools'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Tools</span>
						</a>
					</Link>

					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Projects</span>
						</a>
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a onClick={onClick} className='navbar-item nav-link'>
							<span className='nav-span'>Contact</span>
						</a>
					</Link>
				</div>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='field is-grouped'>
							<a
								href='https://github.com/salymk'
								target='_blank'
								className='has-text-grey-darker mr-3'>
								<i class='fab fa-2x fa-github-square'></i>
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

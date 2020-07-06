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
			console.log(window.scrollY);
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

	let navItemStyle = {
		color: 'hsl(0, 0%, 7%)',
		fontSize: '1em',
	};

	return (
		<nav
			className={`navbar is-white ${
				scrolled ? 'is-fixed-top is-primary' : 'has-shadow'
			}`}
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
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
				<div className='navbar-end is-size-5-tablet ml-6'>
					<Link
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a
							onClick={onClick}
							className='navbar-item nav-link'
							style={navItemStyle}>
							<span className='nav-span'>Home</span>
						</a>
					</Link>

					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a
							onClick={onClick}
							className='navbar-item nav-link'
							style={navItemStyle}>
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
						<a
							onClick={onClick}
							className='navbar-item nav-link'
							style={navItemStyle}>
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
						<a
							onClick={onClick}
							className='navbar-item nav-link'
							style={navItemStyle}>
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
						<a
							onClick={onClick}
							className='navbar-item nav-link'
							style={navItemStyle}>
							<span className='nav-span'>Contact</span>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

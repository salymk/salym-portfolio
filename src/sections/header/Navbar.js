import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	return (
		<nav
			className='navbar is-white has-shadow'
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				<a
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
				<div className='navbar-start is-size-4-tablet ml-6'>
					<a className='navbar-item'>
						<Link
							activeClass='active'
							to='home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							Home
						</Link>
					</a>
					<a className='navbar-item'>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							About
						</Link>
					</a>
					<a className='navbar-item'>
						<Link
							activeClass='active'
							to='tools'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							Tools
						</Link>
					</a>
					<a className='navbar-item'>
						<Link
							activeClass='active'
							to='projects'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							Projects
						</Link>
					</a>
					<a className='navbar-item'>
						<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							Contact
						</Link>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	let navItemStyle = {
		color: 'hsl(0, 0%, 7%)',
		fontSize: '1.1em',
	};
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
					<Link
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a className='navbar-item nav-link' style={navItemStyle}>
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
						<a className='navbar-item nav-link' style={navItemStyle}>
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
						<a className='navbar-item nav-link' style={navItemStyle}>
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
						<a className='navbar-item nav-link' style={navItemStyle}>
							<span className='nav-span'>Home</span>
						</a>
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						offset={-100}
						duration={1000}>
						<a className='navbar-item nav-link' style={navItemStyle}>
							<span className='nav-span'>Contact</span>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

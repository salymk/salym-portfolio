import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
	const onClick = () => {
		let toggle = document.querySelector('.navbar-burger');
		let menu = document.querySelector('.navbar-menu');
		toggle.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='level'>
					<div className='level-left'>
						<div className='level-item'>
							<Link
								activeClass='active'
								to='home'
								spy={true}
								smooth={true}
								offset={-100}
								duration={1000}>
								<a onClick={onClick} className='title is-4 footer-title'>
									Salym Akhmedov
								</a>
							</Link>
						</div>
					</div>
					<div className='level-right'>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							<a onClick={onClick} className='footer-link'>
								About
							</a>
						</Link>

						<Link
							activeClass='active'
							to='portfolio'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							<a onClick={onClick} className='footer-link'>
								Portfolio
							</a>
						</Link>

						<Link
							activeClass='active'
							to='tools'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							<a onClick={onClick} className='footer-link'>
								Tools
							</a>
						</Link>

						<Link
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-100}
							duration={1000}>
							<a onClick={onClick} className='footer-link'>
								Contact
							</a>
						</Link>
					</div>
				</div>
				<hr />
				<div className='columns'>
					<div className='column'>
						<div className='field is-grouped'>
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
					<div className='column has-text-centered has-text-right-tablet'>
						<p className='subtitle is-6'>
							© 2020 Salym Akhmedov. All right reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

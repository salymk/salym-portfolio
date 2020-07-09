import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='level'>
					<div className='level-left'>
						<div className='level-item'>
							<a className='title is-4' href='#'>
								Salym Akhmedov
							</a>
						</div>
					</div>
					<div className='level-right'>
						<a className='level-item' href='#'>
							About
						</a>
						<a className='level-item' href='#'>
							Portfolio
						</a>
						<a className='level-item' href='#'>
							Tools
						</a>
						<a className='level-item' href='#'>
							Contact
						</a>
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

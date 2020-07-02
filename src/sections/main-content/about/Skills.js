import React from 'react';
import BulmaLogo from '../../../images/bulma-logo.png';

const Skills = () => {
	return (
		<div className='section has-background-primary-light'>
			<h1 className='title is-1 has-text-centered mt-6 is-uppercase'>Tools</h1>

			<div className='container grid'>
				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>HTML</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-html5 html-logo-color'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>CSS</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-css3-alt has-text-info	'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>JavaScript</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-js has-text-warning	'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>React</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-react has-text-link'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>Bulma CSS</p>
					<img className='bulma-logo' src={BulmaLogo} alt='Bulma CSS logo' />
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>Node.js</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-node-js has-text-success	'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>Git</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-git-alt git-logo-color'></i>
					</span>
				</div>

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>GitHub</p>
					<span className='icon mt-5'>
						<i className='fab fa-7x fa-github github-logo-color'></i>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;

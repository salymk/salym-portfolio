import React from 'react';
import BulmaLogo from '../../../images/bulma-logo.png';
import icons from '../../../data/skillsData';

const Skills = () => {
	return (
		<div className='section has-background-primary-light'>
			<h1 className='title is-2 has-text-centered mt-6 is-uppercase' id='tools'>
				Tools
			</h1>

			<div className='container grid mb-6'>
				{icons.map((i) => (
					<div className='has-text-centered'>
						<p className='subtitle is-4 mt-6'>{i.name}</p>
						<span className='icon mt-5'>
							<i className={i.icon}></i>
						</span>
					</div>
				))}

				<div className='has-text-centered'>
					<p className='subtitle is-4 mt-6'>Bulma CSS</p>
					<img className='bulma-logo' src={BulmaLogo} alt='Bulma CSS logo' />
				</div>
			</div>
		</div>
	);
};

export default Skills;

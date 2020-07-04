import React from 'react';

const Projects = () => {
	return (
		<div className='section'>
			<h1 className='title is-1 has-text-centered mt-6 mb-6 is-uppercase'>
				Projects
			</h1>

			<div className='container mt-6 grid-cards grid-gap'>
				<div className='card'>
					<div className='card-image'>
						<figure className='image is-4by3'>
							<img
								src='https://bulma.io/images/placeholders/1280x960.png'
								alt='Placeholder image'
							/>
						</figure>
					</div>
					<div className='card-content is-overlay flex-overlay has-text-centered'>
						<div className='container'>
							<h1 className='title is-4 mb-1'>Employee Directory</h1>
							<p className='is-italic'>HTML / CSS / JavaScript</p>
						</div>

						<button className='button is-primary'>Learn more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

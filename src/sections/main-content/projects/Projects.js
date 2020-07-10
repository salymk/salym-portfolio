import React from 'react';
import Modal from './Modal';
import projectsData from '../../../data/projectsData';

const Projects = () => {
	const onClick = () => {
		let modal = document.querySelector('.modal');
		modal.classList.toggle('is-active');
	};
	return (
		<div className='section has-background-white-bis'>
			<h1
				className='title is-2 has-text-centered mt-6 mb-6 is-uppercase'
				id='portfolio'>
				Portfolio
			</h1>
			<div className='container mt-6 grid-cards grid-gap'>
				{projectsData.map((project) => (
					<>
						<div className='card'>
							<div className='card-image'>
								<figure className='image'>
									<img src={project.image.src} alt={project.image.alt} />
								</figure>
							</div>

							<div className='card-content pt-4'>
								<div className='content mb-2'>
									<h1 className='title is-5 mb-2'>{project.title}</h1>
									<p className='subtitle-text has-text-primary'>
										{project.skills}
									</p>
								</div>
								<button
									onClick={onClick}
									className='button is-warning is-fullwidth ct-btn'>
									Learn more
								</button>
							</div>
						</div>
						<Modal
							title='Employee Directory'
							youtube='https://www.youtube.com/embed/myS31QFXorY?rel=0&mute=1'
							skills='HTML / CSS / JS'
							description='Utilized Random User API to grab employee data. You can search for the employees with their names and you click on each employee and it opens up a modal with contact info of employee.'
							githubLink='https://github.com/salymk/employee-directory'
							previewLink='https://salymk.github.io/employee-directory/'
						/>
					</>
				))}
			</div>
		</div>
	);
};

export default Projects;

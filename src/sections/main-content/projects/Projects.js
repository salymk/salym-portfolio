import React from 'react';
import Salym2 from '../../../images/mountain-salym.jpg';
import projectsData from '../../../data/projectsData';
import employeeDirectoryIMG from '../../../images/portfolio/employee_directory.png';

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
				))}
			</div>
		</div>
	);
};

export default Projects;

import React from 'react';
import Salym2 from '../../../images/mountain-salym.jpg';
import projectsData from '../../../data/projectsData';
import employeeDirectoryIMG from '../../../images/portfolio/employee_directory.png';

const Projects = () => {
	return (
		<div className='section pt-0'>
			<h1
				className='title is-1 has-text-centered mt-6 mb-6 is-uppercase'
				id='projects'>
				Projects
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
							<div className='content content-size'>{project.description}</div>

							<div className='buttons'>
								<a
									href={project.github.url}
									target='_blank'
									className='button ct-btn'>
									<span className='icon'>
										<i className='fab fa-github'></i>
									</span>
									<span>{project.github.button}</span>
								</a>
								<a
									href={project.preview.url}
									target='_blank'
									className='button ct-btn  is-warning'>
									{project.preview.button}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;

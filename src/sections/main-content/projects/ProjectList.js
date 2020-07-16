import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../../data/projectsData';

const ProjectList = () => {
	const [projects, setProjects] = useState(projectsData);
	const [open, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	let htmlTag = document.getElementById('html');

	const onOpenModal = (i) => {
		setOpen(true);

		/* Store the id of the clicked on project*/
		setSelectedProject(i);
	};

	const onCloseModal = () => {
		setOpen(false);
	};

	/* Condition for opening and closing modal */
	const active = open ? 'is-active' : '';

	/* Condition for preventing page scroll when a modal is active */
	if (active) {
		htmlTag.classList.add('is-clipped');
	} else {
		htmlTag.classList.remove('is-clipped');
	}

	/*This method creates a card for each project, with a button to open a modal.*/
	const renderProjects = () => {
		return projects.map((project, i) => {
			return (
				<ProjectCard
					key={project.id}
					imageUrl={project.image.src}
					imageAlt={project.image.alt}
					title={project.title}
					skills={project.skills}
					onClick={() => onOpenModal(i)}
				/>
			);
		});
	};

	/* 
     This method checks whether or not you clicked 
    'Learn more' on a project and if you did it creates a modal for it
  */
	const renderModal = () => {
		if (selectedProject !== null) {
			const project = projects[selectedProject];
			return (
				<div className={`modal has-text-centered ${active}`}>
					<div className='modal-background' />

					<div className='modal-card'>
						<header className='modal-card-head'>
							<p className='modal-card-title'>{project.title}</p>
							<button
								onClick={onCloseModal}
								className='delete'
								aria-label='close'
							/>
						</header>
						<section className='modal-card-body'>
							<iframe
								width='400'
								height='215'
								src={project.youtube}
								frameBorder='0'
								title='Project video'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							/>
							<p className='subtitle-text has-text-primary mt-3 mb-3'>
								{project.skills}
							</p>
							<p className='content content-size'>{project.description}</p>
						</section>
						<footer className='modal-card-foot'>
							<div className='buttons is-centered'>
								<a
									href={project.github.url}
									target='_blank'
									rel='noopener noreferrer'
									className='button is-white ct-btn'>
									<span className='icon'>
										<i className='fab fa-github' />
									</span>
									<span>GitHub</span>
								</a>
								{/* If there's no preview link then don't render a button. */}
								{project.preview.url ? (
									<a
										href={project.preview.url}
										target='_blank'
										rel='noopener noreferrer'
										className='button ct-btn is-warning'>
										{project.preview.url ? 'Live preview' : ''}
									</a>
								) : (
									''
								)}
								<button
									onClick={onCloseModal}
									className='button ct-btn is-danger'>
									Close
								</button>
							</div>
						</footer>
					</div>
				</div>
			);
		}
	};

	return (
		<div className='section has-background-white-bis'>
			<h1
				className='title is-2 has-text-centered mt-6 mb-6 is-uppercase'
				id='portfolio'>
				Portfolio
			</h1>
			<div className='container mt-6 grid-cards grid-gap'>
				{renderProjects()}
				<div>{renderModal()}</div>
			</div>
		</div>
	);
};

export default ProjectList;

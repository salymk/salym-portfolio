import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from 'react-modal';
import projectsData from '../../../data/projectsData';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: '#fff',
	},
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
	},
};

const ProjectList = () => {
	const [projects, setProjects] = useState(projectsData);
	const [open, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const onOpenModal = (i) => {
		setOpen(true);
		{
			/* Store the id of the clicked on project*/
		}
		setSelectedProject(i);
	};

	const onCloseModal = (i) => {
		setOpen(false);
	};

	{
		/*This method creates a card for each project, with a button to open a modal.*/
	}
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

	{
		/* 
     This method checks whether or not you clicked 
    'Learn more' on a project and if you did it creates a modal for it
    */
	}
	const renderModal = () => {
		if (selectedProject !== null) {
			const project = projects[selectedProject];
			return (
				<React.Fragment className='has-text-centered'>
					<div className='modal-background' />
					<div className='modal-card'>
						<header className='modal-card-head'>
							<p className='modal-card-title'>{project.title}</p>
							<button
								onClick={onCloseModal}
								className='delete is-medium'
								aria-label='close'
							/>
						</header>

						<section className='modal-card-body'>
							<iframe
								width='360'
								height='215'
								src={project.youtube}
								frameborder='0'
								title='Project video'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							/>

							<p className='subtitle-text-modal has-text-primary mt-3 mb-3'>
								{project.skills}
							</p>
							<div className='content content-size'>{project.description}</div>
						</section>
						<footer className='modal-card-foot'>
							<div className='buttons'>
								<a
									href={project.githubLink}
									target='_blank'
									className='button ct-btn'>
									<span className='icon'>
										<i className='fab fa-github' />
									</span>
									<span>GitHub</span>
								</a>
								<a
									href={project.previewLink}
									target='_blank'
									className='button ct-btn is-warning'>
									{project.previewLink ? 'Live Preview' : 'No Preview'}
								</a>
								<button
									onClick={onCloseModal}
									className='button ct-btn is-danger'>
									Close
								</button>
							</div>
						</footer>
					</div>
				</React.Fragment>
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
				<Modal
					style={customStyles}
					isOpen={open}
					onRequestClose={onCloseModal}
					center>
					<div>{renderModal()}</div>
				</Modal>
			</div>
		</div>
	);
};

export default ProjectList;

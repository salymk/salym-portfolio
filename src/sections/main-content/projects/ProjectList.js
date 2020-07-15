import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from 'react-modal';
import projectsData from '../../../data/projectsData';

const styles = {
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
		top: 50,
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

	let windowOffset = 0;

	const onOpenModal = (i) => {
		setOpen(true);
		{
			/* Store the id of the clicked on project*/
		}
		setSelectedProject(i);
		windowOffset = window.scrollY;
		document.body.setAttribute(
			'style',
			`position: fixed; top: -${windowOffset}px; left: 0; right: 0`,
		);
	};

	const onCloseModal = () => {
		setOpen(false);
		document.body.setAttribute('style', '');
		window.scrollTo(0, windowOffset);
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
				<div className='container has-text-centered	'>
					<h3 className='title is-3 '>{project.title}</h3>
					<iframe
						width='360'
						height='215'
						src={project.youtube}
						frameBorder='0'
						title='Project video'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					/>
					<p className='subtitle is-5 subtitle-text has-text-primary mt-3 mb-3'>
						{project.skills}
					</p>
					<p className='content modal-content-size'>{project.description}</p>
					<div className='buttons is-centered'>
						<a
							href={project.github.url}
							target='_blank'
							className='button is-light ct-btn'>
							<span className='icon'>
								<i className='fab fa-github' />
							</span>
							<span>GitHub</span>
						</a>

						<a
							href={project.preview.url}
							target='_blank'
							className='button ct-btn is-warning'>
							{project.preview.url ? 'Live Preview' : 'No Preview'}
						</a>
						<button onClick={onCloseModal} className='button ct-btn is-danger'>
							Close
						</button>
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
				<Modal
					style={styles}
					isOpen={open}
					onRequestClose={onCloseModal}
					center>
					<div>{renderModal()}</div>
				</Modal>
			</div>
		</div>
	);
};

{
	/*For Accessibility*/
}
Modal.setAppElement('#root');

export default ProjectList;

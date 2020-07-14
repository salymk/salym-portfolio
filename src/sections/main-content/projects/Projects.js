import React, { useState, Fragment } from 'react';
import Modal from 'react-modal';
import ProjectCard from './ProjectCard';
import projectsData from '../../../data/projectsData';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [openModal, setOpenModal] = useState(false);

	const renderModal = () => {};

	return (
		<div className='section has-background-white-bis'>
			<h1
				className='title is-2 has-text-centered mt-6 mb-6 is-uppercase'
				id='portfolio'>
				Portfolio
			</h1>
			<div className='container mt-6 grid-cards grid-gap'>
				{projects.map((project) => (
					<Fragment key={project.id}>
						<ProjectCard
							imageUrl={project.image.src}
							imageAlt={project.image.alt}
							title={project.title}
							skills={project.skills}
							onClick={() => setOpenModal(true)}
						/>
						<Modal isOpen={openModal}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<button onClick={() => setOpenModal(false)}>Close</button>
						</Modal>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Projects;

// <Modal
// 	title={project.title}
// 	youtube={project.youtube}
// 	skills={project.skills}
// 	description={project.description}
// 	githubLink={project.github.url}
// 	previewLink={project.preview.url}
// />;

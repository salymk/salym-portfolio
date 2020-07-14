import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from 'react-modal';
import projectsData from '../../../data/projectsData';

const ProjectList = () => {
	const [projects, setProjects] = useState(projectsData);
	const [open, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const onOpenModal = (i) => {
		setOpen(true);
		setSelectedProject(i);
	};

	const onCloseModal = (i) => {
		setOpen(false);
	};

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

	return (
		<div className='section has-background-white-bis'>
			<h1
				className='title is-2 has-text-centered mt-6 mb-6 is-uppercase'
				id='portfolio'>
				Portfolio
			</h1>
			<div className='container mt-6 grid-cards grid-gap'></div>
		</div>
	);
};

export default ProjectList;

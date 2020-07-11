import React, { useState, Fragment } from 'react';
import Modal from './Modal';
import Card from './Card';
import projectsData from '../../../data/projectsData';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);

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
				{projects.map((project) => (
					<Fragment key={project.id}>
						<Card
							imageUrl={project.image.src}
							imageAlt={project.image.alt}
							title={project.title}
							skills={project.skills}
							onClick={onClick}
						/>
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
// />

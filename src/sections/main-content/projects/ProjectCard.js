import React from 'react';

const ProjectCard = (props) => {
	return (
		<div className='card' key={props.id}>
			<div className='card-image'>
				<figure className='image'>
					<img src={props.imageUrl} alt={props.imageAlt} />
				</figure>
			</div>

			<div className='card-content pt-4'>
				<div className='content mb-2'>
					<h1 className='title is-5 mb-2'>{props.title}</h1>
					<p className='subtitle-text has-text-primary'>{props.skills}</p>
				</div>
				<button
					onClick={props.onClick}
					className='button is-warning is-fullwidth ct-btn'>
					Learn more
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;

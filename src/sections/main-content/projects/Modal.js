import React from 'react';

const Modal = (props) => {
	const onClick = () => {
		let modal = document.querySelector('.modal');
		modal.classList.toggle('is-active');
	};

	return (
		<div className='modal has-text-centered'>
			<div className='modal-background' />
			<div className='modal-card'>
				<header className='modal-card-head'>
					<p className='modal-card-title'>{props.title}</p>
					<button
						onClick={onClick}
						className='delete is-medium'
						aria-label='close'
					/>
				</header>

				<section className='modal-card-body'>
					<iframe
						width='360'
						height='215'
						src={props.youtube}
						frameborder='0'
						title='Project video'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					/>

					<p className='subtitle-text-modal has-text-primary mt-3 mb-3'>
						{props.skills}
					</p>
					<div className='content content-size'>{props.description}</div>
				</section>
				<footer className='modal-card-foot'>
					<div className='buttons'>
						<a
							href={props.githubLink}
							target='_blank'
							className='button ct-btn'>
							<span className='icon'>
								<i className='fab fa-github' />
							</span>
							<span>GitHub</span>
						</a>
						<a
							href={props.previewLink}
							target='_blank'
							className='button ct-btn is-warning'>
							{props.previewLink ? 'Live Preview' : 'No Preview'}
						</a>
						<button onClick={onClick} className='button ct-btn is-danger'>
							Close
						</button>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Modal;

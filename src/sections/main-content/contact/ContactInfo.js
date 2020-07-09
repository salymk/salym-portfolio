import React from 'react';

const ContactInfo = () => {
	return (
		<div className='column is-6'>
			<h4 className='title is-spaced is-4'>
				Have a question or want to work together?
			</h4>

			<div>
				<div className='media'>
					<div className='media-left '>
						<i className='fas fa-map-marker-alt'></i>
					</div>
					<div className='media-content'>
						<div className='content'>
							<p>Aurora, Co</p>
						</div>
					</div>
				</div>
				<div className='media'>
					<div className='media-left'>
						<i className='fas fa-phone'></i>
					</div>
					<div className='media-content'>
						<div className='content'>
							<a href='tel:720-226-1054' className='link-hover'>
								720-226-1054
							</a>
						</div>
					</div>
				</div>
				<div className='media'>
					<div className='media-left'>
						<i className='fas fa-envelope'></i>
					</div>
					<div className='media-content'>
						<div className='content'>
							<a
								href='mailto:khokumdarakhmedov@gmail.com'
								className='link-hover'>
								khokumdarakhmedov@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;

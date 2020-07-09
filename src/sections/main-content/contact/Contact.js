import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<section className='section'>
			<div className='container py-4'>
				<h2 className='title is-2 has-text-centered mb-6' id='contact'>
					Contact
				</h2>
				<div className='columns'>
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import yup from 'yup';

const schema = yup.object().shape({
	Name: yup.string().required(),
	Email: yup.string().email().required(),
	Message: yup.string().required(),
});

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);

		document.getElementById('contact-form').reset();
	};

	return (
		<div className='column is-5 is-offset-1'>
			<form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
				<div className='field'>
					<div className='control'>
						<input className='input' type='text' placeholder='Name' />
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<input className='input' type='email' placeholder='Email' />
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<textarea
							className='textarea'
							rows='5'
							placeholder='Message'></textarea>
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<button
							className='button is-medium is-primary is-fullwidth ct-btn'
							type='submit'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

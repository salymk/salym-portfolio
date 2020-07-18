import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import axios from 'axios';
const schema = yup.object().shape({
	Name: yup.string().required(),
	Email: yup.string().email().required(),
	Message: yup.string().required(),
});

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post('https://formspree.io/mvowvdgd', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		document.getElementById('contact-form').reset();
	};

	return (
		<div className='column is-5 is-offset-1'>
			<form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
				<div className='field'>
					<div className='control has-icons-left'>
						<input
							className={`input ${errors.Name ? 'is-danger' : ''}`}
							type='text'
							placeholder='Name'
							name='Name'
							ref={register}
						/>
						<span className='icon is-small is-left'>
							<i className='fas fa-user' />
						</span>
						<p className={`help ${errors.Name ? 'is-danger' : ''}`}>
							{errors.Name?.message}
						</p>
					</div>
				</div>
				<div className='field'>
					<div className='control has-icons-left'>
						<input
							className={`input ${errors.Email ? 'is-danger' : ''}`}
							type='email'
							placeholder='Email'
							name='Email'
							ref={register}
						/>
						<span className='icon is-small is-left'>
							<i className='fas fa-envelope' />
						</span>
						<p className={`help ${errors.Email ? 'is-danger' : ''}`}>
							{errors.Email?.message}
						</p>
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<textarea
							className={`textarea ${errors.Message ? 'is-danger' : ''}`}
							type='text'
							placeholder='Message'
							name='Message'
							ref={register}
						/>
						<p className={`help is-1 ${errors.Message ? 'is-danger' : ''}`}>
							{errors.Message?.message}
						</p>
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

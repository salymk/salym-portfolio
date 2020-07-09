import React from 'react';

const ContactForm = () => {
	return (
		<div className='column is-5 is-offset-1'>
			<form>
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

import React from 'react';

const Modal = (props) => {
	return <div className='modal has-text-centered'>{props.children}</div>;
};

export default Modal;

// const toggle = () => {
// 	let modal = document.querySelector('.modal');
// 	modal.classList.toggle('is-active');
// };

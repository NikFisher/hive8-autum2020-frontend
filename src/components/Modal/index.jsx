import React from 'react';
import PropTypes from 'prop-types';
import ModalStyled from './ModalStyled';
//import ModalStyled from './ModalStyled'
//import Overlay from '../Overlay/index'

const MODAL_STYLES = {
	position: 'fixed',
	top: '10%',
	left: '10%',
	right: '10%',
	transform: 'translate:(-50%, -50%)',
	backgroundColor: '#F5F5F5',
	padding: '50px',
	zIndex: 1000,
	filter: 'drop-shadow(0px, 4px, 4px, rgba(0, 0, 0, 0.25))'
};

const OVERLAY_STYLES = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 1000
};

const Modal = props => {
	if (!props.open) return null;

	return (
		<>
			<div style={OVERLAY_STYLES}></div>
			<ModalStyled>
				<div style={MODAL_STYLES}>{props.children}</div>
			</ModalStyled>
		</>
	);
};

Modal.propTypes = {
	children: PropTypes.any.isRequired,
	open: PropTypes.bool
};

Modal.defaultTypes = {};

export default Modal;

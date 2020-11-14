import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
	if (props.isSelected) {
		return <div>{props.children}</div>;
	}
	return null;
};

Tab.propTypes = {
	children: PropTypes.any.isRequired,
	isSelected: PropTypes.bool
};

Tab.defaultTypes = {};

export default Tab;

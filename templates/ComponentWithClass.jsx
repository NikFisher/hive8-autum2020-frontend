import React from 'react';
import PropTypes from 'prop-types';

import ComponentWithClassStyled from './ComponentWithClassStyled';

class ComponentWithClass extends React.Component {
	componentDidMount() {
		//
	}

	render() {
		return <ComponentWithClassStyled>{props.children}</ComponentWithClassStyled>;
	}
}

ComponentWithClass.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	])
};

ComponentWithClass.defaultProps = {};

export default ComponentWithClass;

import React from 'react';
import PropTypes from 'prop-types';

import ComponentStyled from './ComponentStyled';

const Component = props => <ComponentStyled {...props}>{props.children}</ComponentStyled>;

Component.propTypes = {};

Component.defaultProps = {};

export default Component;

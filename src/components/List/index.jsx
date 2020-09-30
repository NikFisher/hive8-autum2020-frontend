import React from 'react';
import Button from '../Button/index';
import PropTypes from 'prop-types';

const List = props => {

	return (
		<div>
			<ul>
				{props.items.map(item => <li>{item.txt}</li>)}
			</ul>
			<Button onClick={props.listClick} />
		</div>
	);
};

List.propTypes = {
	items: PropTypes.array,
	listClick: PropTypes.func
};

List.defaultTypes = {
	items: [],
	listClick: () => { }
};

export default List;

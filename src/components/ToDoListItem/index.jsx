/* eslint-disable no-console */
import React from 'react';
import PropTypes, { bool } from 'prop-types';

import ToDoListItemStyled from './ToDoListItemStyled';
import Todo from '../../compositions/Todo/index';
import H3 from '../H3/index';
import H2 from '../H2/index';
import H1 from '../H1/index';
import Button from '../Button/index';
import Grid from '../Grid/index';
import Link from '../Link/index';
import GridChild from '../GridChild/index';
import Paragraph from '../Paragraph/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import { useState } from 'react';
import EditTaskView from '../../containers/EditTaskView/index';

var isChecked = false;

/*function setCheck(newCheck){
	isChecked = newCheck;

	console.log("checked: " + isChecked)
	return isChecked
}*/
//const [check, setCheck2] = useState(false);

const ToDoListItem = props => (
	<ToDoListItemStyled {...props} disabled={props.disabled}>
		<Grid columns={4}>
			<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
				<Paragraph>Completed</Paragraph>
				<input type="checkbox" onChange={props.onChange} checked={props.checked} />
			</GridChild>
			<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
				<h2> {props.children}</h2>
			</GridChild>
			<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
				<Link to="/EditTaskView">
					<Button onClick={props.edit}>Edit</Button>
				</Link>
				<Button onClick={props.delete}>Delete</Button>
			</GridChild>
		</Grid>
	</ToDoListItemStyled>
);

ToDoListItem.propTypes = {
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	delete: PropTypes.function,
	edit: PropTypes.function,
	onChange: PropTypes.function,
	checked: PropTypes.bool
};

ToDoListItem.defaultTypes = {
	disabled: false,
	onClick: () => null
};

export default ToDoListItem;

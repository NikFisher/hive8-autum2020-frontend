/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ToDoListItemStyled from './ToDoListItemStyled';
import Button from '../Button/index';
import Grid from '../Grid/index';
import GridChild from '../GridChild/index';
import Paragraph from '../Paragraph/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';

/*function setCheck(newCheck){
	isChecked = newCheck;

	console.log("checked: " + isChecked)
	return isChecked
}*/
//const [check, setCheck2] = useState(false);

const ToDoListItem = props => {
	console.log('PROPS EDIT', props.edit);
	return (
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
					<Link
						to={{
							pathname: `/EditTaskView/${props.task.taskID}`,
							state: { taskObject: props.task }
						}}
					>
						<Button>Edit</Button>
					</Link>
					<Button onClick={props.delete}>Delete</Button>
				</GridChild>
			</Grid>
		</ToDoListItemStyled>
	);
};

ToDoListItem.propTypes = {
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	delete: PropTypes.func,
	edit: PropTypes.func,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	nameOfTask: PropTypes.string,
	task: PropTypes.object
};

ToDoListItem.defaultTypes = {
	disabled: false,
	onClick: () => null
};

export default ToDoListItem;

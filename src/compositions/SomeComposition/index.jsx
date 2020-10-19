/* eslint-disable no-console */
import React, { Children, useEffect, useState } from 'react';
import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Box from '../../components/Box/index';
import ToDoListItem from '../../components/ToDoListItem/index';
import H1 from '../../components/H1/index';
import Button from '../../components/Button/index';
import { render } from 'react-dom';
import Router from '../../routes/index';
import Link from '../../components/Link/index';
import EditTaskView from '../../containers/EditTaskView/index';

const SomeComposition = () => {
	const [allTasks, setAllTasks] = useState(
		['mow the lawn', 'clean bathroom', 'walk the dog', 'feed the cat'].map(val => ({
			taskID: 0,
			name: val,
			isCompleted: false
		}))
	);
	allTasks[1].taskID = 1;
	allTasks[2].taskID = 2;
	allTasks[3].taskID = 3;

	// eslint-disable-next-line no-console
	const submit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-console
		console.log(e.target.elements.toDoTask.value);
		const newActivity = { name: e.target.elements.toDoTask.value, isCompleted: false };

		const newAllTasks = [newActivity, ...allTasks];
		console.log(e.target.elements.toDoTask.value);

		setAllTasks(newAllTasks);
		//setCompletedTasks(newToDoList)
	};

	const [status, setStatus] = useState('all');

	useEffect(() => {
		console.log('all tasks', allTasks);
	}, [allTasks, status]);

	const changeItemStatus = (index, newStatus) => {
		let newItemList = allTasks; //hämta nuvarande todo lista
		newItemList[index].isCompleted = newStatus;
		console.log(newItemList);
		//setToDoList(newItemList);
		setAllTasks(newItemList);
	};

	const deleteTask = task => {
		setAllTasks(allTasks.filter(el => el.name != task.name));
	};

	return (
		<div>
			Content of <strong>SomeComposition</strong>
			<Box>
				<Grid columns={4}>
					<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
						<H1>To do List</H1>
					</GridChild>
					<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
						<label htmlFor="options">View: </label>
						<select value={status} onChange={e => setStatus(e.target.value)}>
							<option value="all">All</option>
							<option value="complete">Completed</option>
							<option value="incomplete">Not completed</option>
						</select>
					</GridChild>
					<GridChild columnSpan={[{ columns: 4 }, { break: breakpoints.mobile, columns: 1 }]}>
						<form onSubmit={submit}>
							<input type="text" name="toDoTask"></input>
							<Button type="submit">Add Item</Button>
						</form>
					</GridChild>
				</Grid>
				<div>
					{allTasks
						.filter(
							toDoItem =>
								(toDoItem.isCompleted && status == 'complete') ||
								(!toDoItem.isCompleted && status == 'incomplete') ||
								status == 'all'
						)
						.map((toDoItem, index) => {
							console.log(toDoItem);

							return (
								<ToDoListItem
									key={toDoItem + index}
									onChange={() => changeItemStatus(index, !toDoItem.status)}
									checked={toDoItem.isCompleted}
									delete={() => deleteTask(toDoItem)}
									nameOfTask={toDoItem.name}
								>
									{toDoItem.name}
								</ToDoListItem>
							);
						})}
				</div>
			</Box>
		</div>
	);
};

SomeComposition.propTypes = {};

SomeComposition.defaultTypes = {};

export default SomeComposition;

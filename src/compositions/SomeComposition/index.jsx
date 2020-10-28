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
import { firestore } from '../../helpers/firebase/storage/init.mjs';

const SomeComposition = () => {
	const [allTasks, setAllTasks] = useState([]);

	useEffect(() => {
		updateTaskList();
	}, []);

	function updateTaskList() {
		firestore
			.collection('toDoTasks')
			.orderBy('order', 'asc')
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				console.log(data);
				setAllTasks(data);
			});
	}
	// eslint-disable-next-line no-console
	const submit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-console
		console.log(e.target.elements.toDoTask.value);
		const newActivity = { name: e.target.elements.toDoTask.value, isCompleted: false };

		//const newAllTasks = [newActivity, ...allTasks];
		console.log(e.target.elements.toDoTask.value);

		firestore.collection('toDoTasks').add({
			isCompleted: false,
			taskName: newActivity.name,
			order: allTasks.length + 1
		});
		updateTaskList();
	};

	const [status, setStatus] = useState('all');

	useEffect(() => {
		console.log('all tasks', allTasks);
		//const orderedTasks = allTasks

		//orderedTasks.sort((a,b)=>(a.order-b.order))
		//setAllTasks(orderedTasks)
	}, [allTasks, status]);

	const changeItemStatus = (task, newStatus) => {
		firestore
			.collection('toDoTasks')
			.doc(task.id)
			.update({ isCompleted: newStatus });
		updateTaskList();
	};

	const deleteTask = task => {
		firestore
			.collection('toDoTasks')
			.doc(task.id)
			.delete();
		updateTaskList();
		//setAllTasks(allTasks.filter(el => el.name != task.name));
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
									onChange={() => changeItemStatus(toDoItem, !toDoItem.status)}
									checked={toDoItem.isCompleted}
									delete={() => deleteTask(toDoItem)}
									nameOfTask={toDoItem.name}
									task={toDoItem}
								>
									{toDoItem.taskName}
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

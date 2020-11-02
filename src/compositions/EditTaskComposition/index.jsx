/* eslint-disable no-console */
import React, { Children, useEffect, useState } from 'react';
import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Box from '../../components/Box/index';
import ToDoListItem from '../../components/ToDoListItem/index';
import H1 from '../../components/H1/index';
import H3 from '../../components/H3/index';
import Button from '../../components/Button/index';
import Paragraph from '../../components/Paragraph/index';
import { render } from 'react-dom';
import Router from '../../routes/index';
import Link from '../../components/Link/index';
import EditTaskView from '../../containers/EditTaskView/index';
import PropTypes from 'prop-types';
import { firestore } from '../../helpers/firebase/storage/init.mjs';

const EditTaskComposition = props => {
	const [task, setTask] = useState({ taskName: '', isCompleted: false });
	const [allTasks, setAllTasks] = useState([]);

	useEffect(() => {
		var docRef = firestore.collection('toDoTasks').doc(props.taskId);
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					//console.log("Document data:", doc.data());
					setTask({
						taskName: doc.data().taskName,
						isCompleted: doc.data().isCompleted,
						order: doc.data().order
					});
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});

		//console.log(receivedTask);
		//setTask(receivedTask);
	}, []);

	useEffect(() => {
		firestore
			.collection('toDoTasks')
			.orderBy('order', 'asc')
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				//console.log(data);
				setAllTasks(data);
			});
	}, [allTasks, setAllTasks]);

	const onSaveClick = e => {
		firestore
			.collection('toDoTasks')
			.doc(props.taskId)
			.update({ taskName: task.taskName, order: task.order });
		console.log(task);
	};

	const handleNameChange = e => {
		var updatedTask = { taskName: e.target.value, isCompleted: task.isCompleted };
		console.log(updatedTask);
		setTask(updatedTask);
	};

	const handleOrderChange = e => {
		var newOrder = parseInt(e.target.value);
		var taskList = allTasks;

		taskList.map((taskObject, index = newOrder) => {
			if (taskObject.id != task.id) {
				taskObject.order++;
			}
		});
		task.order = newOrder;
		setTask(task);
		console.log(newOrder);
		console.log(taskList);
		var updatedTask = {
			taskName: task.taskName,
			isCompleted: task.isCompleted,
			order: parseInt(e.target.value)
		};
		setTask(updatedTask);
	};

	return (
		<div>
			<Box>
				<Grid columns={5}>
					<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
						<Link to="/somecomposition">
							<Button>Back</Button>
						</Link>
					</GridChild>
					<GridChild
						columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}
					></GridChild>
					<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 3 }]}>
						<H1>Edit Task</H1>
						<H3>Rename:</H3>
						<input defaultValue={task.taskName} onChange={handleNameChange} />
						<H3>Order in list:</H3>
						<input defaultValue={task.order} onChange={handleOrderChange} />
						<button onClick={onSaveClick}>save changes</button>
						<Link to="/somecomposition">
							<button>cancel</button>
						</Link>
					</GridChild>
				</Grid>
				<Grid columns={5}>
					<GridChild
						columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
					></GridChild>
					<GridChild
						columnSpan={[{ columns: 2 }, { break: breakpoints.mobile, columns: 1 }]}
					></GridChild>
				</Grid>
			</Box>
		</div>
	);
};

EditTaskComposition.propTypes = {
	taskId: PropTypes.string
};

EditTaskComposition.defaultTypes = {};

export default EditTaskComposition;

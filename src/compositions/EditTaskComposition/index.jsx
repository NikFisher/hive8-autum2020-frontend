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

	useEffect(() => {
		var docRef = firestore.collection('toDoTasks').doc(props.taskId);
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					//console.log("Document data:", doc.data());
					setTask({ taskName: doc.data().taskName, isCompleted: doc.data().isCompleted });
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

	const onSaveClick = e => {
		firestore
			.collection('toDoTasks')
			.doc(props.taskId)
			.update({ taskName: task.taskName });
		console.log(task);
	};

	const handleChange = e => {
		var updatedTask = { taskName: e.target.value, isCompleted: task.isCompleted };
		console.log(updatedTask);
		setTask(updatedTask);
	};

	return (
		<div>
			<Box>
				<Grid columns={5}>
					<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
						<Link to="/SomeComposition">
							<Button>Back</Button>
						</Link>
					</GridChild>
					<GridChild
						columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}
					></GridChild>
					<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 3 }]}>
						<H1>Edit Task</H1>
						<H3>Rename:</H3>
						<input defaultValue={task.taskName} onChange={handleChange} />
						<H3>Order in list:</H3>
						<input defaultValue="1" />
						<button onClick={onSaveClick}>save changes</button>
						<Link to="/SomeComposition">
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

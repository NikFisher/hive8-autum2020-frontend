/* eslint-disable no-console */
import React, { Children, useState } from 'react';
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

const EditTaskComposition = props => {
	const onSaveClick = e => {
		console.log('hello from onSaveClick');
	};

	//const [name] = useParams();
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
						<input defaultValue={props.taskName} />
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
	taskName: PropTypes.string
};

EditTaskComposition.defaultTypes = {};

export default EditTaskComposition;

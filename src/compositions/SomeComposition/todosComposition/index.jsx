import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './todoForm'
import TodoList from './todoList'

class TodoComposition extends React.Component {
	constructor(props) {
		super(props)

		this.State = {
			todoList: []
		}
	}

	render() {
		return (
			<div>
				Content of <strong>TodosComposition</strong>
				<h1>Hellloooooo from Composition Todo</h1>
				<div>
					<TodoForm />
					{/* <TodoList /> */}
				</div>
			</div>
		);
	}
};

TodoComposition.propTypes = {};

TodoComposition.defaultTypes = {};

export default TodoComposition;

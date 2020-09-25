import React from 'react';
// import TodoForm from './todoForm';
import PropTypes from 'prop-types';
// import TodoList from './todoList';

//THIS is a composition
const Todo = props => {
	return (
		<div>
			Content of <strong>TodosComposition</strong>
			<h1>Hellloooooo from Composition Todo</h1>
			<h2>Your name is {props.name}</h2>
			<div>{/* <TodoForm />
				<TodoList /> */}</div>
		</div>
	);
};

Todo.propTypes = {
	name: PropTypes.string
};

Todo.defaultTypes = {
	name: 'DefaultNamn'
};

export default Todo;

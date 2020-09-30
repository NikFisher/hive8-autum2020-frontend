import React, { useState } from 'react';
// import TodoForm from './todoForm';
import PropTypes from 'prop-types';
import List from '../../components/List/index';
// import TodoList from './todoList';


//THIS is a composition
const Todo = props => {

	const [clickedCities, setClickedCities] = useState([]);

	const clickCity = () => {

		let allClickedCities = JSON.parse(JSON.stringify(clickedCities));
		allClickedCities.push(allCities[0]);
		setClickedCities(allClickedCities);
	};

	const allCities = [{ txt: "Sala" }, { txt: "Göteborg" }, { txt: "Borås" }];


	return (
		<div>
			Content of <strong>TodosComposition</strong>
			<h1>Hellloooooo from Composition Todo</h1>
			<h2>Your name is {props.name}</h2>
			<List items={allCities} listClick={clickCity} />
			<h1>Clicked Cities</h1>
			{/* {JSON.stringify(clickedCities)} */}
			{clickedCities.map(clickedCityObject => { return <span>{clickedCityObject.txt}</span> })}
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

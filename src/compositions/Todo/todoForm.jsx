import React from './react';
import H3 from '../../../components/H3';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';

const TodoForm = () => {
	const [title, setTitle] = useState('defaultTitle');
	const [description, setDescription] = useState('defaultDescription');

	const setTextFields = () => {
		setTitle('CHANGED TITLE');
		setDescription('CHANGED DESCRIPTION');
	};

	return (
		<div>
			<H3>Lägg till Todo</H3>
			<Input>{title}</Input>
			<Input>{description}</Input>
			<Button onClick={setTextFields}>Lägg till</Button>
		</div>
	);
};

export default TodoForm;

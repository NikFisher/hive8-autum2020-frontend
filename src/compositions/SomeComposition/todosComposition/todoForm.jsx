import React from 'react'
import PropTypes from 'prop-types';
import H3 from '../../../components/H3'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

class TodoForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			description: ""
		}
	}

	render() {
		return (
			<div>
				<H3>Lägg till Todo</H3>
				<Input>{this.state.title}</Input>
				<Input>{this.state.description}</Input>
				<Button>Lägg till</Button>
			</div>
		)
	}
}

export default TodoForm
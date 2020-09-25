import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import View from '../View/index';

import Todo from '../../compositions/Todo/index';

import Box from '../../components/Box/index';
import GridChild from '../../components/GridChild/index';
import H3 from '../../components/H3/index';

class TodoView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: [],

			// Events
			isLoading: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		// const data = await getData(endpoint, options);

		await (() => {
			this.setState({
				// data,
				isLoading: false
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		return (
			<View title="Some view">
				<Box>
					<GridChild>
						<H3> This is Todo View with H3 component </H3>
						<h3>Regular h3</h3>
						{/* {this.state.isLoading && <Loader />} */}
						{!this.state.isLoading && <Todo name="YANICA" />}
					</GridChild>
				</Box>
			</View>
		);
	}
}

TodoView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

TodoView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(TodoView);

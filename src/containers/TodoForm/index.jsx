import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import H3 from 'components/H3'
import GridChild from 'components/GridChild'
import Box from 'components/Box'

import Loader from 'components/Loader';

import View from 'containers/View';
import TodoComposition from 'compositions/SomeComposition/todosComposition';

class SomeView extends React.Component {
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
						<H3> This is TodoForm with H3 component </H3>
						<h3>Regular h3</h3>
						{/* {this.state.isLoading && <Loader />} */}
						{!this.state.isLoading && <TodoComposition />}
					</GridChild>
				</Box>
			</View>
		);
	}
}

SomeView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

SomeView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(SomeView);

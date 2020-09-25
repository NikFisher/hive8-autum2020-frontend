import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import H3 from 'components/H3'
import GridChild from 'components/GridChild'

import Loader from 'components/Loader';

import View from 'containers/View';
import SomeComposition from 'compositions/SomeComposition';

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
				<GridChild>
					{/* {this.state.isLoading && <Loader />}
				{!this.state.isLoading && <SomeComposition />} */}
					<H3> This is TodoForm with H3 component </H3>
					<h3>Regular h3</h3>
				</GridChild>
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

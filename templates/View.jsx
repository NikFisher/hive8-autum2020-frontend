import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';
import getNewScreen from 'helpers/state/getNewScreen.mjs';
import setScreenName from 'helpers/state/setScreenName.mjs';

class SomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// Application state
			appState: {},

			// Data from backend(s)
			data: [],

			// Screens
			screens: {
				isDisplayingFront: true,
				isDisplayingError: false
			},

			// Dialogs
			dialogs: {
				isDisplayingSignout: false
			},

			// Events
			isLoading: true
		};
	}

	async initView() {
		//const data = await getData(endpoint, options);
		await (() => {
			this.setState({
				// data,
				isLoading: false
			});
		})();
	}

	toggleScreen(type, newScreen) {
		/* Expected format, example:
		 ** toggleScreen is called like so: toggleScreen('screens', 'ingredients')
		 ** Valid arguments should be 'dialog' (popup) or 'screen'
		 ** Arguments will match: this.state.screens.isDisplayingIngredients
		 ** NOTE: This function is the same for screens AND dialogs
		 */

		this.setState({
			[type]: getNewScreen(this.state.screens, setScreenName(newScreen))
		});
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		return (
			<View title="Some view">{!this.state.isLoading && <section>Content goes here</section>}</View>
		);
	}
}

export default withRouter(SomeView);

SomeView.propTypes = {};

SomeView.defaultTypes = {};

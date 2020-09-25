import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from 'contexts/AppContext';

import persistState from 'helpers/state/persistState.mjs';
import getData from 'helpers/data/getData.mjs';
import getLocale from 'helpers/utils/getLocale.mjs';

import Debug from 'components/Debug';
import InstallBanner from 'components/InstallBanner';
import ConsentModal from 'components/ConsentModal';

import getInitialState from 'state/getInitialState.mjs';

import Routes from 'routes/index';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: getInitialState(),
			data: {},
			debug: true
		};
	}

	closeConsentModal = () => {
		const NEW_STATE = {
			closedConsent: true,
			acceptedTerms: true,
			acceptedTermsTime: Date.now
		};

		this.updateState(NEW_STATE);
	};

	wipeStorageAndReload = () => {
		window.localStorage.clear();
		window.location = '/';
	};

	async updateState(newState) {
		if (newState) {
			const NEW_STATE = { ...this.state.appState, ...newState };

			await (() => {
				this.setState({
					appState: NEW_STATE
				});
			})();

			persistState(NEW_STATE);
		} else console.error('Tried calling updateState() without new state!');
	}

	async initView() {
		let data = {}; //await getData("content", getLocale(window.location.host));

		if (data) {
			//data = await prepareData(data);

			const HISTORY_COUNT = 1; //window.location.pathname === "/" ? 1 : 2;

			if (
				window.location.pathname !== this.state.appState.lastKnownRoute &&
				this.props.history.length <= HISTORY_COUNT
			) {
				//alert("Rerouting to last known route");
				//console.log("Rerouting to last known route");
				window.location = this.state.appState.lastKnownRoute;
			}

			await (() => {
				this.setState({
					//data
				});
			})();
		} else
			console.error(
				'Seems data could not be fetched, or something totally bombed when initializing the app...'
				//data
			);
	}

	async componentDidMount() {
		await this.initView();
	}

	componentDidUpdate = prevProps => {
		if (this.props.location !== prevProps.location) {
			this.updateState({ lastKnownRoute: this.props.location.pathname });
		}
	};

	render() {
		return (
			<>
				{this.state.debug && (
					<Debug
						appVersion={this.props.appVersion}
						wipeStorageAndReload={this.wipeStorageAndReload}
					/>
				)}

				{this.state.appState.deviceIsIOS && !this.state.appState.isStandalone && <InstallBanner />}

				{!this.state.appState.closedConsent && (
					<ConsentModal
						text="By using this app/site you are agreeing to our Integrity Policy and our use of cookies and similar technologies."
						closeLabel="Close"
						close={this.closeConsentModal}
					/>
				)}
				<Routes appState={this.state.appState} data={this.state.data} />
			</>
		);
	}
}

App.propTypes = {
	appVersion: PropTypes.string,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(App);

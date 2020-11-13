import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Loader from 'components/Loader';
import View from 'containers/View';

import ActivityInfo from '../../components/ActivityInfo/index';
import BottomNavBar from '../../components/BottomNavBar/index';

class ActivityView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ActivityInfo
					activityId={this.props.match.params.activityid}
					collectionId={this.props.match.params.collectionid}
					collectionSource={this.props.match.params.source}
				></ActivityInfo>
				<BottomNavBar currentView="collections"></BottomNavBar>
			</div>
		);
	}
}

ActivityView.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

ActivityView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(ActivityView);

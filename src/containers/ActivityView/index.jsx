import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Loader from 'components/Loader';
import View from 'containers/View';

import ActivityInfo from '../../compositions/ActivityInfo/index';
import BottomNavBar from '../../components/BottomNavBar/index';

const ActivityView = props => {
	/*constructor(props) {
		super(props);
	}*/

	return (
		<div>
			<ActivityInfo
				activityId={props.match.params.activityid}
				collectionId={props.match.params.collectionid}
				collectionSource={props.match.params.source}
				collectionName={props.location.state.collectionName}
			></ActivityInfo>

			<BottomNavBar currentView="collections"></BottomNavBar>
		</div>
	);
};

ActivityView.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

ActivityView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(ActivityView);

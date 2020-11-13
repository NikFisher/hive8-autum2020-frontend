/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';
import BottomNavBar from '../../components/BottomNavBar/index';
import CollectionComposition from '../../compositions/CollectionComposition';

class CollectionView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<CollectionComposition
					collectionId={this.props.match.params.collectionid}
					collectionSource={this.props.match.params.source}
				></CollectionComposition>
				<BottomNavBar currentView="collections"></BottomNavBar>
			</div>
		);
	}
}

CollectionView.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

CollectionView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(CollectionView);

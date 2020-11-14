import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';
import BottomNavBar from '../../components/BottomNavBar/index';
import AllCollectionsComp from '../../compositions/AllCollectionsComp';

const AllCollections = () => {
	return (
		<div>
			<AllCollectionsComp></AllCollectionsComp>
			<BottomNavBar currentView="collections"></BottomNavBar>
		</div>
	);
};

AllCollections.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

AllCollections.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(AllCollections);

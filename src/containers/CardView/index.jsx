/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';

import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import Box from '../../components/Box/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';
import image from '../../assets/img/image.jpg';
import { firestore } from '../../helpers/firebase/storage/init.mjs';

import CardDeckComposition from '../../compositions/CardDeckComposition';

class CardView extends React.Component {
	render() {
		return <CardDeckComposition></CardDeckComposition>;
	}
}
CardView.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

CardView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(CardView);

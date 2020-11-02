/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter } from 'react-router-dom';

import View from 'containers/View';
import TinderCard from 'react-tinder-card';

import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import Box from '../../components/Box/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';
import CardviewStyled from './CardViewStyled';
import CardViewStyled from './CardViewStyled';

var pictures = [
	'../../assets/img/image.jpg',
	'../../assets/img/hammer.jpg',
	'../../assets/img/screwdriver.jpg',
	'../../assets/img/saw.jpg',
	'../../assets/img/wrench2.jpg'
];

class CardView extends React.Component {
	render() {
		const onSwipe = direction => {
			console.log('You swiped: ' + direction);
		};

		const onCardLeftScreen = myIdentifier => {
			console.log(myIdentifier + ' left the screen');
		};
		//const [pictures, setPictures] = useState(['../../assets/img/image.jpg', '../../assets/img/hammer.jpg', '../../assets/img/screwdriver.jpg']);

		return (
			<div>
				<link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />

				<Grid columns={4}>
					<GridChild style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<CardViewStyled>
							<div className="cardContainer">
								{pictures.map(picture => (
									<TinderCard
										key={picture}
										onSwipe={onSwipe}
										onCardLeftScreen={() =>
											onCardLeftScreen('fooBar')
										} /*preventSwipe={['right', 'left'] }*/
									>
										<div style={{ backgroundImage: 'url(' + picture + ')' }} className="card"></div>
									</TinderCard>
								))}
							</div>
						</CardViewStyled>
					</GridChild>
				</Grid>
			</div>
		);
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

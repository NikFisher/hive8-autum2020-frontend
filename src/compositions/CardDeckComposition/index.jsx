/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter } from 'react-router-dom';

//import View from './containers/View';
import TinderCard from 'react-tinder-card';

import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import Box from '../../components/Box/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';

import CardDeckStyled from './CardDeckStyled';
//import image from '../../assets/img/image.jpg';
import { firestore } from '../../helpers/firebase/storage/init.mjs';
//import { storage }  from '../..helpers/firebase/storage/init.mjs'
import BottomNavBar from '../../components/BottomNavBar/index';

var pictures = [
	'../../assets/img/image.jpg',
	'../../assets/img/hammer.jpg',
	'../../assets/img/screwdriver.jpg',
	'../../assets/img/saw.jpg',
	'../../assets/img/wrench2.jpg'
];

var activitiesFromDB = [];

var image =
	'https://firebasestorage.googleapis.com/v0/b/hive-8.appspot.com/o/artipelag-from-above-photo-by-artipelag-CMSTe.width-2500_bhahcom.jpg?alt=media&token=e4927e98-56dd-4699-b154-e06db1a244ca';

const CardDeckComposition = () => {
	const [images, setImages] = useState(pictures);

	const [chosenCards, setChosenCards] = useState([]);

	const [currentIndex, setCurrentIndex] = useState(0);

	const [activities, setActivities] = useState([]);

	useEffect(() => {
		updateList();
	}, []);

	useEffect(() => {
		console.log(activities);
	}, [activities]);

	const updateList = () => {
		firestore
			.collection('activities')
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				setActivities(data);
				activitiesFromDB = data;
			});
	};
	const onSwipe = (direction, card) => {
		console.log('You swiped: ' + direction);
		if (direction == 'right') {
			const listOfChosenCards = chosenCards;
			listOfChosenCards.push(card);
			setChosenCards(listOfChosenCards);
		}
		setCurrentIndex(i => i + 1);
		console.log(chosenCards);
		console.log(activities);
	};

	const onCardLeftScreen = myIdentifier => {
		console.log(myIdentifier + ' left the screen');
	};

	return (
		<div>
			<link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
			<Grid>
				<GridChild style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<CardDeckStyled>
						<div className="cardContainer">
							{activities.map(activity => (
								<TinderCard
									key={activity.images[0]}
									className="swipe"
									onSwipe={dir => onSwipe(dir, activity.images[0])}
									onCardLeftScreen={() => onCardLeftScreen('fooBar')}
									preventSwipe={['up', 'down']}
								>
									<div
										style={{ backgroundImage: 'url(' + activity.images[0] + ')' }}
										className="card"
									></div>
								</TinderCard>
							))}
						</div>
					</CardDeckStyled>
				</GridChild>
			</Grid>
		</div>
	);
};

CardDeckComposition.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

CardDeckComposition.defaultTypes = {
	appState: {},
	data: {}
};

export default CardDeckComposition;

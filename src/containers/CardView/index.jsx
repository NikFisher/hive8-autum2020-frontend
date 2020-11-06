/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
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
import image from '../../assets/img/image.jpg';
import { firestore } from '../../helpers/firebase/storage/init.mjs';

var pictures = [
	'../../assets/img/image.jpg',
	'../../assets/img/hammer.jpg',
	'../../assets/img/screwdriver.jpg',
	'../../assets/img/saw.jpg',
	'../../assets/img/wrench2.jpg'
];

var activitiesFromDB = [];

const CardView = () => {
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

	//const [pictures, setPictures] = useState(['../../assets/img/image.jpg', '../../assets/img/hammer.jpg', '../../assets/img/screwdriver.jpg']);

	return (
		<div>
			<link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />

			<CardViewStyled>
				<div className="cardContainer">
					{images.map(picture => (
						<TinderCard
							key={picture}
							className="swipe"
							onSwipe={dir => onSwipe(dir, picture)}
							onCardLeftScreen={() => onCardLeftScreen('fooBar')}
							preventSwipe={['up', 'down']}
						>
							<div style={{ backgroundImage: 'url(' + picture + ')' }} className="card"></div>
							{/*<img src = {picture}></img>*7*/}
						</TinderCard>
					))}
				</div>
			</CardViewStyled>
		</div>
	);
};

CardView.prototypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

CardView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(CardView);

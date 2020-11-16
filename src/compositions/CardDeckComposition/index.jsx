/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';

//import View from './containers/View';
import TinderCard from 'react-tinder-card';

import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import Box from '../../components/Box/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';

import CardDeckStyled from './CardDeckStyled';
import { firestore } from '../../helpers/firebase/storage/init.mjs';
import Modal from '../../components/Modal/index';
import { ReactSVG } from 'react-svg';

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
	let history = useHistory();

	const [images, setImages] = useState(pictures);
	const [chosenCards, setChosenCards] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activities, setActivities] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [descriptionInput, setDescriptionInput] = useState('');
	const [noInputEntered, setNoInputEntered] = useState(true);

	useEffect(() => {
		updateList();
	}, []);

	useEffect(() => {
		console.log(activities);
	}, [activities]);

	useEffect(() => {
		if (currentIndex >= 4) {
			setModalOpen(true);
		}
	}, [currentIndex]);

	const saveClicked = () => {
		var collectionID = makeId(5);

		let newCollection = {
			id: collectionID,
			name: nameInput,
			description: descriptionInput,
			image: chosenCards[0].images[0],
			selectedActivities: chosenCards
		};

		//console.log(newCollection);

		//const collections = [newCollection];
		//let localCollections = []

		if (localStorage.getItem('localCollections') === null) {
			const localCollections = [newCollection];
			localStorage.setItem('localCollections', JSON.stringify(localCollections));
		} else {
			let localCollections = localStorage.getItem('localCollections');
			localCollections = JSON.parse(localCollections);
			localCollections.push(newCollection);
			localStorage.setItem('localCollections', JSON.stringify(localCollections));
		}

		//localCollections = JSON.parse(localCollections)

		//localCollections.push(newCollection)

		///console.log(localCollections)
		//localStorage.setItem('localCollections', JSON.stringify(localCollections));

		history.push({
			pathname: `/collections/local/${collectionID}`,
			state: { selection: chosenCards }
		});
	};

	const discardClicked = () => {
		history.push({
			pathname: '/collections'
		});
	};

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
				setCurrentIndex(activities.length);
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
		console.log(currentIndex);
		console.log(chosenCards);
		//console.log(activities.length)
	};

	const onCardLeftScreen = myIdentifier => {
		console.log(myIdentifier + ' left the screen');
	};

	const makeId = length => {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const handleNameInputchange = e => {
		setNameInput(e.target.value);
		if (descriptionInput != '') {
			setNoInputEntered(false);
		}
		//console.log(e.target.value)
	};

	const handleDescriptionInput = e => {
		setDescriptionInput(e.target.value);
		if (nameInput != '') {
			setNoInputEntered(false);
		}
		//console.log(e.target.value);
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
									onSwipe={dir => onSwipe(dir, activity)}
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
			<Modal open={modalOpen} className="modalContent">
				<p>
					All the amazing activities and places have now been added to a list. Name the list and add
					a short description to save it
				</p>

				<p>Name of list</p>
				<input
					type="text"
					value={nameInput}
					className="nameInput"
					onChange={handleNameInputchange}
				></input>
				<p>Description</p>
				<textarea value={descriptionInput} onChange={handleDescriptionInput}></textarea>
				<br></br>
				<br></br>
				<button className="discardButton" onClick={discardClicked}>
					Discard
				</button>
				<button className="button" onClick={saveClicked} disabled={noInputEntered}>
					<div className="saveBtnContent">
						Save
						<ReactSVG
							src="../../assets/icons/like.svg"
							beforeInjection={svg => {
								svg.classList.add('svg');
								svg.setAttribute('style', 'position: relative');
								svg.setAttribute('style', 'fill: #4C3D00');
							}}
						/>
					</div>
				</button>
			</Modal>
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

/* eslint-disable no-console */
import React, { Children, useEffect, useState } from 'react';
import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Box from '../../components/Box/index';
import H1 from '../../components/H1/index';
import H3 from '../../components/H3/index';
import Paragraph from '../../components/Paragraph/index';
import image from '../../assets/img/image.jpg';
import image2 from '../../assets/img/saw.jpg';
import CollectionCompositionStyled from './CollectionCompositionStyled';
import { firestore } from '../../helpers/firebase/storage/init.mjs';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const CollectionComposition = props => {
	const [collection, setCollection] = useState({
		id: '',
		name: '',
		description: '',
		activities: []
	});
	const [activities, setActivities] = useState([]);

	const [selectedActivities, setSelectedActivities] = useState([]);

	useEffect(() => {
		//console.log(props.selected);
		//setSelectedActivities(props.selected);
		//getData();
		const source = props.collectionSource;
		if (source == 'local') {
			getFromLocalStorage();
		} else if (source == 'db') {
			getCollectionFromDb();
			getAllActivities();
			//getActivities(collection.activities)
			//getActivities();
		}
	}, []);

	const getFromLocalStorage = () => {
		let collections = localStorage.getItem('localCollections');
		collections = JSON.parse(collections);
		let collection = collections[0];
		//console.log(collection);
		setCollection(collection);
		setSelectedActivities(collection.selectedActivities);
	};

	const getCollectionFromDb = () => {
		var docRef = firestore.collection('collections').doc(props.collectionId);
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setCollection({
						name: doc.data().name,
						description: doc.data().description,
						activities: doc.data().activities
					});
					getActivities(doc.data().activities);
				} else {
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	};
	const getActivities = collActivities => {
		console.log(collActivities);
		collActivities.map(activity => {
			getActivity(activity);
			//activityList.push(selectedActivity)
		});
		//console.log(activityList)
		//setSelectedActivities(activityList)
	};

	const getActivity = activityId => {
		//let activity = {}
		var docRef = firestore.collection('activities').doc(activityId);
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setSelectedActivities([...selectedActivities, { id: activityId, ...doc.data() }]);
				} else {
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	};

	const getAllActivities = () => {
		firestore
			.collection('activities')
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				setActivities(data);
			});
	};
	return (
		<div>
			<CollectionCompositionStyled>
				<Box>
					<h1>Collections</h1>
					<hr></hr>
					<Link to="/collections" style={{ textDecoration: 'none' }}>
						<div className="collections">
							<ReactSVG
								src="../../assets/icons/left-arrow.svg"
								beforeInjection={svg => {
									svg.classList.add('svg');
									svg.setAttribute('style', 'fill: #494949');
								}}
							/>
							<p className="collections_link">Collections</p>
						</div>
					</Link>
					<h2>{collection.name}</h2>
					<p>{collection.description}</p>
					<Grid columns={4}>
						{selectedActivities.map((activity, index) => {
							console.log(activity);
							return (
								<GridChild
									key={activity + index}
									columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
								>
									<Link
										to={{
											pathname: `/collections/${props.collectionSource}/${props.collectionId}/activities/${activity.id}`
											//state: { activity: props.selected }
										}}
										style={{ textDecoration: 'none' }}
									>
										{activity.images && <img src={activity.images[0]}></img>}
										{activity.name && <p>{activity.name}</p>}
									</Link>
								</GridChild>
							);
						})}
					</Grid>
				</Box>
			</CollectionCompositionStyled>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

CollectionComposition.propTypes = {
	//selected: PropTypes.array
	collectionId: PropTypes.string,
	collectionSource: PropTypes.string
};

CollectionComposition.defaultTypes = {};

export default CollectionComposition;

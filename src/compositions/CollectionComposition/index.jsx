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

const CollectionComposition = () => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
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
					<h2>A Mix of Sweden</h2>
					<p>A mix of everything Sweden has to offer</p>
					{/*<Grid columns={4}>
					<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
						<img src={image}></img>
						<Paragraph>Title</Paragraph>
					</GridChild>
					<GridChild  columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
					</GridChild>
					<GridChild columnSpan={[{ columns: 1}, { break: breakpoints.mobile, columns: 1 }]}>
						<img src={image2}></img>
						<Paragraph>Title</Paragraph>
					</GridChild>
					</Grid>	*/}
					<Grid columns={4}>
						{activities.map((activity, index) => {
							return (
								<GridChild
									key={activity + index}
									columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
								>
									<img src={activity.images[0]}></img>
									<p>{activity.name}</p>
								</GridChild>
							);
						})}
					</Grid>
				</Box>
			</CollectionCompositionStyled>
		</div>
	);
};

CollectionComposition.propTypes = {};

CollectionComposition.defaultTypes = {};

export default CollectionComposition;

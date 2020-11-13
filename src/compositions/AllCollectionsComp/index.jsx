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
import AllCollectionsCompStyled from './AllCollectionsCompStyled';
import { firestore } from '../../helpers/firebase/storage/init.mjs';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AllCollectionsComp = () => {
	const [localCollections, setLocalCollections] = useState([]);
	const [dbCollections, setdbCollections] = useState([]);

	useEffect(() => {
		getLocalCollections();
		getDbCollections();
	}, []);

	const getLocalCollections = () => {
		let data = localStorage.getItem('localCollections');
		data = JSON.parse(data);
		setLocalCollections(data);
		//console.log(data);
	};

	const getDbCollections = () => {
		firestore
			.collection('collections')
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				setdbCollections(data);
				console.log(data);
			});
	};

	return (
		<div>
			<Box>
				<AllCollectionsCompStyled>
					<h1>Collections</h1>
					<hr></hr>
					<br></br>
					<br></br>
					<Grid columns={4}>
						{dbCollections.map(collection => (
							<GridChild
								key={collection}
								columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
							>
								<img src={collection.image}></img>
								<h2>{collection.name}</h2>
								<p>{collection.description}</p>
							</GridChild>
						))}
						{localCollections.map(collection => (
							<GridChild
								key={collection}
								columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
							>
								<Link
									to={{
										pathname: `/collections/local/${collection.id}`
									}}
									style={{ textDecoration: 'none' }}
								>
									<img src={collection.image}></img>
									<h2>{collection.name}</h2>
									<p>{collection.description}</p>
								</Link>
							</GridChild>
						))}
					</Grid>
				</AllCollectionsCompStyled>
			</Box>
		</div>
	);
};

AllCollectionsComp.propTypes = {
	//selected: PropTypes.array
};

AllCollectionsComp.defaultTypes = {};

export default AllCollectionsComp;

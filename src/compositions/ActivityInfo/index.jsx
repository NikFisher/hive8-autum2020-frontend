/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Box from '../../components/Box/index';
import Slider from 'react-slick';
import styled from 'styled-components';
import { firestore } from '../../helpers/firebase/storage/init.mjs';
import arrowIcon from '../../assets/icons/left-arrow.svg';

import ActivityInfoStyled from './ActivityInfoStyled';

const Page = styled.div`
	width: 100%;
	height: 500px;
	display: block;
`;
const Wrapper = styled.div`
	width: 100%;
	display: inline-block;
	margin-bottom: 30px;
	height: 500px;
`;

const ActivityInfo = props => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	const [activity, setActivity] = useState({ name: '', description: '', images: [] });

	useEffect(() => {
		var docRef = firestore.collection('activities').doc(props.activityId);
		docRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setActivity({
						name: doc.data().name,
						description: doc.data().description,
						images: doc.data().images
					});
				} else {
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	}, []);

	return (
		<div>
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			<Box>
				<ActivityInfoStyled>
					<h1>Collections</h1>
					<hr></hr>
					<Link
						to={{ pathname: `/collections/${props.collectionSource}/${props.collectionId}` }}
						style={{ textDecoration: 'none' }}
					>
						<div className="collection">
							{
								<ReactSVG
									src={arrowIcon}
									beforeInjection={svg => {
										svg.classList.add('svg');
										svg.setAttribute('style', 'fill: #494949');
									}}
								/>
							}
							<p className="collection_link">{props.collectionName}</p>
						</div>
					</Link>

					<Wrapper>
						<Slider {...settings}>
							<Page>
								<img src={activity.images[0]}></img>
							</Page>
							<Page>
								<img src={activity.images[1]}></img>
							</Page>
						</Slider>
					</Wrapper>

					<h2>{activity.name}</h2>
					<hr></hr>
					<p>{activity.description}</p>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
				</ActivityInfoStyled>
			</Box>
		</div>
	);
};

ActivityInfo.propTypes = {
	activityId: PropTypes.string,
	collectionId: PropTypes.string,
	collectionSource: PropTypes.string,
	collectionName: PropTypes.string
};

ActivityInfo.defautlTypes = {};

export default ActivityInfo;

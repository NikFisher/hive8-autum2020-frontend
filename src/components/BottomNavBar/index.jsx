/* eslint-disable no-console */
import React, { Children, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import BottomNavBarStyled from './BottomNavBarStyled';
import Grid from '../Grid/index';
import GridChild from '../GridChild/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';
import Box from '../Box/index';
import { ReactSVG } from 'react-svg';

import { useHistory } from 'react-router-dom';

const BottomNavBar = props => {
	let history = useHistory();

	const [searchIcon, setSearchIcon] = useState(
		<ReactSVG
			src="../../assets/icons/search3.svg"
			beforeInjection={svg => {
				svg.classList.add('svg');
				svg.setAttribute('style', 'fill: #7E7E7E');
			}}
			onClick={() => iconClicked('../../assets/icons/search3.svg', 'search', 'gray')}
		/>
	);

	const [homeIcon, setHomeIcon] = useState(
		<ReactSVG
			src="../../assets/icons/home.svg"
			beforeInjection={svg => {
				svg.classList.add('svg');
				svg.setAttribute('style', 'fill: #7E7E7E');
			}}
			onClick={() => iconClicked('home')}
		/>
	);
	const [heartIcon, setHeartIcon] = useState(
		<ReactSVG
			src="../../assets/icons/heart.svg"
			beforeInjection={svg => {
				svg.classList.add('svg');
				svg.setAttribute('style', 'fill: #7E7E7E');
			}}
			onClick={() => iconClicked('heart')}
		/>
	);

	useEffect(() => {
		var url = '';
		var iconName = '';
		if (props.currentView == 'home') {
			(url = '../../assets/icons/home.svg'), 'home', 'gray';
			iconName = 'home';
		} else if (props.currentView == 'collections') {
			(url = '../../assets/icons/heart.svg'), 'heart', 'gray';
			iconName = 'heart';
		}
		console.log(props.currentView);
		makeYellow(url, props.currentView, iconName);
	}, []);

	const makeYellow = (url, currentView, iconName) => {
		var newIcon = (
			<ReactSVG
				src={url}
				beforeInjection={svg => {
					svg.classList.add('svg');
					svg.setAttribute('style', 'fill: #FECB00');
				}}
				onClick={() => iconClicked(iconName)}
			></ReactSVG>
		);
		if (currentView == 'home') {
			setHomeIcon(newIcon);
		} else if (currentView == 'collections') {
			setHeartIcon(newIcon);
		}
	};
	const iconClicked = iconName => {
		//var newColor = '';

		if (iconName == 'home') {
			//setHomeIcon(newIcon);
			history.push('/swipe');
		} else if (iconName == 'heart') {
			//setHeartIcon(newIcon);
			history.push('/collections');
		} else {
			//setSearchIcon(newIcon);
		}
	};

	return (
		<BottomNavBarStyled>
			<nav>
				<Box>
					<Grid columns={3}>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							{searchIcon}
						</GridChild>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							{homeIcon}
						</GridChild>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							{heartIcon}
						</GridChild>
					</Grid>
				</Box>
			</nav>
		</BottomNavBarStyled>
	);
};

BottomNavBar.propTypes = {
	currentView: PropTypes.string
};

BottomNavBar.defautlTypes = {};

export default BottomNavBar;

/* eslint-disable no-console */
import React, { Children, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import BottomNavBarStyled from './BottomNavBarStyled';
import icon from '../../assets/icons/searching-magnifying-glass.png';
import icon2 from '../../assets/icons/home.png';
import icon3 from '../../assets/icons/heart.png';
import Grid from '../Grid/index';
import GridChild from '../GridChild/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';
import Box from '../Box/index';
import { ReactSVG } from 'react-svg';

const BottomNavBar = () => {
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
			onClick={() => iconClicked('../../assets/icons/home.svg', 'home', 'gray')}
		/>
	);
	const [heartIcon, setHeartIcon] = useState(
		<ReactSVG
			src="../../assets/icons/heart.svg"
			beforeInjection={svg => {
				svg.classList.add('svg');
				svg.setAttribute('style', 'fill: #7E7E7E');
			}}
			onClick={() => iconClicked('../../assets/icons/heart.svg', 'heart', 'gray')}
		/>
	);
	const iconClicked = (url, iconName, currentColor) => {
		var newColor = '';
		var newIcon = (
			<ReactSVG
				src={url}
				beforeInjection={svg => {
					svg.classList.add('svg');
					if (currentColor == 'gray') {
						svg.setAttribute('style', 'fill: #FECB00');
						newColor = 'yellow';
					} else {
						svg.setAttribute('style', 'fill: #7E7E7E');
						newColor = 'gray';
					}
				}}
				onClick={() => iconClicked(url, iconName, newColor)}
			/>
		);
		if (iconName == 'home') {
			setHomeIcon(newIcon);
		} else if (iconName == 'heart') {
			setHeartIcon(newIcon);
		} else {
			setSearchIcon(newIcon);
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

BottomNavBar.propTypes = {};

BottomNavBar.defautlTypes = {};

export default BottomNavBar;

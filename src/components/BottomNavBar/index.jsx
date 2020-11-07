import React from 'react';
import PropTypes from 'prop-types';

import BottomNavBarStyled from './BottomNavBarStyled';
import icon from '../../assets/icons/searching-magnifying-glass.png';
import icon2 from '../../assets/icons/home.png';
import icon3 from '../../assets/icons/heart.png';
import Grid from '../Grid/index';
import GridChild from '../GridChild/index';
import breakpoints from '../../helpers/constants/breakpoints.mjs';
import Box from '../Box/index';

const BottomNavBar = () => {
	return (
		<BottomNavBarStyled>
			<nav>
				<Box>
					<Grid columns={3}>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							<img src={icon}></img>
						</GridChild>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							<img src={icon2}></img>
						</GridChild>
						<GridChild columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 1 }]}>
							<img src={icon3}></img>
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

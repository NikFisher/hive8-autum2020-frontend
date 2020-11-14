import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/index';
import GridChild from '../GridChild/index';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import TabNavStyled from './TabNavStyled';

const TabNav = props => {
	return (
		<div>
			<TabNavStyled>
				<Grid columns={4}>
					{props.tabs.map(tab => {
						const active = tab === props.selected ? 'active ' : '';
						return (
							<GridChild
								key={tab}
								columnSpan={[{ columns: 1 }, { break: breakpoints.mobile, columns: 2 }]}
							>
								<a onClick={() => props.setSelected(tab)} className={'nav-item' + active}>
									<p>{tab}</p>
									<hr></hr>
								</a>
							</GridChild>
						);
					})}
				</Grid>
			</TabNavStyled>
			{props.children}
		</div>
	);
};

TabNav.propTypes = {
	children: PropTypes.any.isRequired,
	tabs: PropTypes.array,
	setSelected: PropTypes.func,
	selected: PropTypes.string
};

TabNav.defaultTypes = {};

export default TabNav;

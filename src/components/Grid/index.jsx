import React from 'react';
import PropTypes from 'prop-types';

import GridStyled from './GridStyled';
import spacing from 'tokens/spacing.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const spaces = Object.keys(spacing);

const Grid = ({ children, childPadding, ...props }) => {
	return (
		<GridStyled className="Grid" {...props}>
			{React.Children.map(children, child =>
				React.isValidElement(child) && childPadding
					? React.cloneElement(child, {
							padding: childPadding
					  })
					: child
			)}
		</GridStyled>
	);
};

Grid.propTypes = {
	align: PropTypes.oneOf(['stretch', 'flex-start', 'center']).isRequired,
	childPadding: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	columnGap: PropTypes.oneOfType([PropTypes.oneOf([...spaces]), PropTypes.number]).isRequired,
	columns: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.object),
		PropTypes.number,
		PropTypes.oneOf(['auto-fit', 'auto-fill'])
	]).isRequired,
	margins: PropTypes.string.isRequired,
	maxWidth: PropTypes.string.isRequired,
	minColumnWidth: PropTypes.string,
	rowGap: PropTypes.oneOfType([PropTypes.oneOf([...spaces]), PropTypes.number]).isRequired
};

Grid.defaultProps = {
	align: 'stretch',
	childPadding: '',
	columnGap: 40,
	columns: [{ columns: 4 }, { break: breakpoints.maxMobile, columns: 6 }],
	margins: '0 auto',
	maxWidth: `${breakpoints.maxPageWidth}px`,
	rowGap: 0
};

export default Grid;

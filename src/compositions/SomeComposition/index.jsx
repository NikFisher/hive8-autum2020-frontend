import React from 'react';
import Grid from '../../components/Grid/index';
import GridChild from '../../components/GridChild/index';

const SomeComposition = () => {
	return (
		<div>
			Content of <strong>SomeComposition</strong>
			<h1>Hellloooooo from Composition</h1>
			<Grid>
				<GridChild>omg such fun</GridChild>
			</Grid>
		</div>
	);
};

SomeComposition.propTypes = {};

SomeComposition.defaultTypes = {};

export default SomeComposition;

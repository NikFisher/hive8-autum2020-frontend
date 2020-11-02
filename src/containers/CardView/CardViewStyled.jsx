import styled from 'styled-components';

import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';

const CardViewStyled = styled.div`
	.cardContainer {
		width: 90vw;
		max-width: 260px;
		height: 300px;
	}

	.card {
		position: relative;
		background-color: #fff;
		width: 80vw;
		max-width: 260px;
		height: 300px;
		box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		background-size: cover;
		background-position: center;
	}
`;

export default CardViewStyled;

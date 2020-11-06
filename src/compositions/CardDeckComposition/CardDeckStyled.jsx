import styled from 'styled-components';

/*import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';*/

const CardViewStyled = styled.div`
	#root {
		text-align: center;
		display: flex;
		justify-content: center;
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
		/* background: linear-gradient(#fff, #999); */
		background: linear-gradient(#e66465, #9198e5);
	}

	#root > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.app > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.row {
		flex-direction: row !important;
	}

	.row > * {
		margin: 5px;
	}

	h1 {
		font-family: 'Damion', cursive;
		color: #fff;
		text-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
	}

	h2 {
		color: #fff;
	}

	.swipe {
		position: absolute;
	}

	.cardContainer {
		width: 105vw;
		max-width: 260px;
		height: 850px;
	}

	.card {
		background-color: #fff;
		width: 100vw;
		max-width: auto;
		height: 850px;
		box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);

		background-size: cover;
		background-position: center;
	}

	.cardContent {
		width: 100%;
		height: 100%;
	}

	.swipe:last-of-type {
	}

	img {
		width: 105vw;
		height: 900px;
	}
`;

export default CardViewStyled;

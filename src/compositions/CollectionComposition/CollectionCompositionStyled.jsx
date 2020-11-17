import styled from 'styled-components';
import SwedenSans from '../../assets/fonts/SwedenSansRegular.woff';

const CollectionCompositionStyled = styled.div`
	@font-face {
		font-family: Sweden Sans;
		src: url(${SwedenSans}) format('woff');
	}
	img {
		max-width: 40vw;
		maxheight: 60vw;
	}

	h1 {
		margin-bottom: 0px;
		font-family: Sweden Sans;
		color: #000000;
	}

	h2 {
		font-weight: bold;
		color: #000000;
		font-family: Sweden Sans;
		margin-bottom: 0;
	}
	p {
		font-family: Sweden Sans;
		font-size: 20px;
		color: #000000;
		margin-top: 5px;
	}

	hr {
		width: 10%;
		margin-left: 5px;
		margin-top: 0px;
		background-color: #fecb00;

		border-width: 0;
		height: 10px;
	}

	.collections_link {
		color: #494949;
		margin-bottom: 0px;
		margin-left: 0px;
		margin-top: 7.5px;
	}

	.svg {
		width: 25px;
		height: 25px;
		margin-right: 10px;
		margin-left: 5px;
		margin-top: 5px;
	}

	.collections {
		display: flex;
		margin-top: 20px;
	}
`;

export default CollectionCompositionStyled;

import styled from 'styled-components';

const ActivityInfoStyled = styled.div`
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
		margin-top: 20px;
	}

	hr {
		width: 10%;
		margin-left: 5px;
		margin-top: 0px;
		background-color: #fecb00;

		border-width: 0;
		height: 10px;
	}

	.collection_link {
		color: #494949;
		margin-bottom: 0px;
		margin-left: 0;
		margin-top: 5px;
	}

	.svg {
		width: 25px;
		height: 25px;
		margin-right: 5px;
		margin-left: 0;
		margin-top: 5px;
	}

	.collection {
		display: flex;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	img {
		max-height: 100%;
		height: 100%;
		width: 100%;
	}
`;

export default ActivityInfoStyled;

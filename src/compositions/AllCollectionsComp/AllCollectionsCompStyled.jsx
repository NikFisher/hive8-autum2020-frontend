import styled from 'styled-components';

const AllCollectionsCompStyled = styled.div`
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
		font-size: 20px;
		color: #000000;
		font-family: Sweden Sans;
		margin-bottom: 0;
		margin-top: 0;
	}
	h3 {
		font-weight: bold;
		color: #000000;
		font-family: Sweden Sans;
		margin-bottom: 0;
		margin-top: 0;
	}

	p {
		font-family: Sweden Sans;
		font-size: 20px;
		color: #5c5c5c;
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

	.collections {
		display: flex;
		margin-top: 20px;
	}

	.localCollection {
		white-space: narrowwrap;
		overflow: hidden;
		text-overflow: ellipses;
	}
`;

export default AllCollectionsCompStyled;

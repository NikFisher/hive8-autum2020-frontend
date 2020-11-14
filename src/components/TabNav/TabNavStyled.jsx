import styled from 'styled-components';

const TabNav = styled.div`
	margin-bottom: 10px;
	color: #000000;

	p {
		font-family: Sweden Sans;
	}

	.nav-item {
		p {
			color: 0, 0, 0, 0.5;
			margin-bottom: 0px;
			font-family: Sweden Sans;
			margin-left: 10px;
		}
		hr {
			margin-top: 0px;
			background-color: #005bc7;
			border-width: 0;
			height: 0px;
			width: 70%;
		}
	}
	.nav-itemactive {
		p {
			color: black;
			font-weight: bold;
			margin-bottom: 0px;
			font-family: Sweden Sans;
			margin-left: 10px;
		}
		hr {
			margin-top: 0px;
			background-color: #005bc7;
			border-width: 0;
			height: 3px;
			width: 100%;
		}
	}
`;

export default TabNav;

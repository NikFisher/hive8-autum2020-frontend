import styled from 'styled-components';

const BottomNavBarStyled = styled.div`
	position: fixed
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	nav{
		
		justify-content: space-around;
		height: auto;
		width: 100%;
		align items: center;
		background-color: white;
		position: fixed;
		bottom: 0
	}

	img{
		height: 50px;
		margin-left: 15px;
	}

	.svg{
		height: 50px;
		width: 50px;
		margin-left: 15px;
		viewBox: 0 0 0 0;
	}

	.svg_clicked{
		height: 50px;
		width: 50px;
		margin-left: 15px;
		fill: #FECB00;
		viewBox: 0 0 0 0;
	}
`;

export default BottomNavBarStyled;

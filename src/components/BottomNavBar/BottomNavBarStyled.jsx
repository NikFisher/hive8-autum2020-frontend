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
`;

export default BottomNavBarStyled;

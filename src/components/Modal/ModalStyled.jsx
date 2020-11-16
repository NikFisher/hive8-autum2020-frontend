import styled from 'styled-components';

const ModalStyled = styled.div`
	p {
		color: #000000;
		font-family: Sweden Sans;
		margin-bottom: 0px;
		margin-left: 0px;
	}
	.button {
		background-color: #fecb00;
		border: none;
		margin-left: 5px;
		width: 90px;
		height: 45px;
		color: #4c3d00;
		font-family: Sweden Sans;
		vertical-align: bottom;
		text-align: center;
		padding-right: 20px;
	}

	.discardButton {
		background-color: #fff;
		border: 2px solid #fecb00;
		width: 80px;
		height: 45px;
	}

	button .svg {
		position: absolute;
		width: 15px;
		vertical-align: middle;
		margin-left: 5px;
		margin-top: 3.5px;
		padding-right: 25px;
	}
	.saveBtnContent {
		display: flex;
		justify-content: center;
	}

	input {
		border: none;
		margin-top: 0px;
	}

	.nameInput {
		height: 30px;
	}

	.descriptionInput {
		height: 40px;
	}

	textarea {
		border: none;
		height: 40px;
	}
`;
export default ModalStyled;

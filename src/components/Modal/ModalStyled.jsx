import styled from 'styled-components';

const ModalStyled = styled.div`
	p {
		color: #000000;
		font-family: Sweden Sans;
		margin-bottom: 0px;
	}
	.button {
		background-color: #fecb00;
		border: none;
		margin-left: 5px;
		width: 80px;
		height: 40px;
	}
	.discardButton {
		background-color: #fff;
		border: 2px solid #fecb00;
		width: 80px;
		height: 40px;
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

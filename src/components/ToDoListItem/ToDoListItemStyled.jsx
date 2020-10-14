import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import fontFamilies from 'tokens/fontFamilies.mjs';
import spacing from 'tokens/spacing.mjs';
import colors from 'tokens/colors.mjs';
import Paragraph from '../Paragraph/index';

const ToDoListItemStyled = styled.div`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;

	width: 50%;
	display: block;
	height: 7rem;
	border: 0;
	border-radius: 0.5rem;

	font-size: ${fontSizes.m};
	font-family: ${fontFamilies.fontSemibold};
	color: ${colors.white};
	background-color: ${colors.gray2};
	padding: ${spacing.tiny} ${spacing.small};
	margin: 0 0 0;
	cursor: pointer;
	transition: 0.1s;

	&:hover {
		box-shadow: 0 0.5rem 1rem -0.5rem ${colors.gray3};
		transition: 0.2s;
	}

	&:disabled {
		cursor: not-allowed;
		border: 0;
		color: ${colors.gray1};
		background-color: ${colors.red};
		transition: 0.2s;
	}

	#status{
		background-color: ${colors.gray1};
		float: left;

		width: auto;
	}
	.row{
		height:100%
		width: auto;
	}
	.column{
		float: left;
		width: auto;
	}
	
	input[type="checkbox"]{
		width: 400px; /*Desired width*/
		height: 25px; /*Desired height*/
		margin-bottom: 1px
	}

`;

export default ToDoListItemStyled;

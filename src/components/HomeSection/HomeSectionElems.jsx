import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

export const HomeSectionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 800px;

	@media screen and (max-width: 768px) {
		/* display: block; */
		height: auto;
		margin-top: 60px;
		padding: 70px 0 50px;
	}
	@media screen and (max-width: 480px) {
		margin: 0;
	}
`;
export const HomeSectionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 1200px;
	z-index: 1;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		max-width: 700px;
	}
`;
export const HomeContentConatiner = styled.div`
	flex: 50%;
	padding: 0 34px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		margin: 40px 0;
	}
	@media screen and (max-width: 425px) {
		margin: 55px 0;
	}
`;

export const HomeContent = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

export const HomeContentHeader = styled.h1`
	font-size: 48px;
	margin-bottom: 30px;
	color: #0ba86b;
	@media screen and (max-width: 768px) {
		font-size: 36px;
		margin-bottom: 15px;
	}
	@media screen and (max-width: 425px) {
		font-size: 28px;
		margin-bottom: 15px;
	}
`;

export const HomeContentBody = styled.p`
	font-size: 18px;
	margin-bottom: 30px;
	color: #21302a;
	line-height: 1.5;
	@media screen and (max-width: 768px) {
		font-size: 16px;
		margin-bottom: 15px;
	}
`;

export const HomeContentBtnWrapper = styled.div`
	display: flex;
`;

export const HomeContentBtn = styled(LinkRouter)`
	font-size: 16px;
	padding: 10px 22px;
	text-decoration: none;
	background-color: #0ba86b;
	border: none;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin-right: 20px;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #21302a;
		${"" /* #0ba86b */}
		background: #e9e9e9;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
		padding: 8px 20px;
	}
`;

export const HomeVectorContainer = styled.div`
	flex: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		align-items: revert;
	}
`;

export const HomeContentVector = styled.img`
	width: auto;
	height: auto;
	max-width: 75%;
	max-height: 100%;
	@media screen and (max-width: 768px) {
		max-width: 47%;
	}
	@media screen and (max-width: 425px) {
		max-width: 70%;
	}
`;

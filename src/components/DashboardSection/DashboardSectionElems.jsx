import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const DashboardSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	background: #fff;

	@media screen and (max-width: 768px) {
		/* display: block; */
		/* height: 1300px; */
	}
	@media screen and (max-width: 480px) {
		/* height: 1300px; */
	}
`;
export const DashboardSectionWrapper = styled.div`
	margin: 100px 0;
	@media screen and (max-width: 768px) {
		/* margin: 90px 0; */
	}
`;
export const DashboardSectionHeader = styled.h1`
	font-size: 36px;
	margin-bottom: 70px;
	color: #0ba86b;
	text-align: center;
	@media screen and (max-width: 768px) {
		font-size: 36px;
	}
	@media screen and (max-width: 425px) {
		font-size: 28px;
		margin-bottom: 45px;
	}
`;

export const DashboardSectionBody = styled.div`
	max-width: 1000px;
	display: grid;
	justify-content: space-around;
	margin: 0 auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
	padding: 0 50px;
	align-items: center;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		padding: 0 60px;
		grid-gap: 50px;
	}
	@media screen and (max-width: 425px) {
		grid-template-columns: 1fr;
		grid-gap: 50px;
	} ;
`;
export const DashboardSectionItem = styled.div`
	background: #ffffff;
	box-shadow: 3px 3px 23px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-height: 340px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const DashboardSectionItemContentIcon = styled.img`
	width: 80px;
	height: 80px;
`;
export const DashboardSectionItemContentHeader = styled.h2`
	font-size: 28px;
	margin: 15px 0;
	color: #0ba86b;
	@media screen and (max-width: 768px) {
		font-size: 24px;
		margin-bottom: 15px;
	}
	@media screen and (max-width: 425px) {
		font-size: 24px;
		margin-bottom: 15px;
	}
`;
export const DashboardSectionItemContentBody = styled.p`
	font-size: 18px;
	line-height: 1.5;
	margin-bottom: 30px;
	color: #21302a;
	text-align: center;
	@media screen and (max-width: 768px) {
		font-size: 16px;
		margin-bottom: 15px;
	}
`;

export const DashboardSectionItemContentBtnWrapper = styled.div`
	display: flex;
`;
export const DashboardSectionItemContentBtn = styled(LinkRouter)`
	font-size: 16px;
	padding: 10px 22px;
	text-decoration: none;
	background-color: #0ba86b;
	border: none;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

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

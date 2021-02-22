import styled from "styled-components";

export const DashboardContainer = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 800px;
	margin: 66px;
	@media screen and (max-width: 768px) {
		height: auto;
	}
`;

export const DashboardWrapper = styled.div`
	max-width: 1000px;
	/* margin: 100px 0; */

	@media screen and (max-width: 768px) {
	}
`;

export const DashboardHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 40px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-top: 40px;
	}
`;

export const HeaderContent = styled.div`
	background: #ffffff;
	box-shadow: 3px 3px 23px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-height: 340px;
	padding: 40px;
	/* flex: 60%; */
	width: 60%;
	@media screen and (max-width: 768px) {
		width: auto;
		margin-bottom: 40px;
	}
`;

export const Title = styled.h1`
	text-align: left;
`;

export const Body = styled.p``;

export const ProgressBar = styled.div`
	background: #ffffff;
	box-shadow: 3px 3px 23px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-height: 340px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	position: relative;
	@media screen and (max-width: 768px) {
	}
`;

export const DashboardChartsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const BarChart = styled.div`
	background: #ffffff;
	box-shadow: 3px 3px 23px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-height: 340px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	height: 500px;
	margin-bottom: 30px;
	width: 48%;
	@media screen and (max-width: 768px) {
		width: auto;
	}
`;
export const LineChart = styled.div`
	background: #ffffff;
	box-shadow: 3px 3px 23px 5px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	max-height: 340px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	height: 500px;
	margin-bottom: 30px;
	width: 48%;
	@media screen and (max-width: 768px) {
		width: auto;
	}
`;

export const Score = styled.h2`
	position: absolute;
`;

export const Students = styled.select`
	position: absolute;
	top: 0;
	right: 0;
	margin: 20px 20px 0 0;
	outline: none;
	padding: 5px;
	font-family: "Raleway";
	border: none;
	background: #0ba86b;
	color: #fff;
	border-radius: 10px;
`;
export const Student = styled.option``;

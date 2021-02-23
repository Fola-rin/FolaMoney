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
	padding: 7px;
	font-family: "Raleway";
	border: none !important;
	/* background: #0ba86b !important; */
	color: #fff;
	border-radius: 10px;
	font-size: 16px;
	-webkit-appearance: none;
	-moz-appearance: none;
	/* appearance: none; */
	background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
		no-repeat #0ba86b;
	width: 70px;
	background-position: right 5px top 50%;
`;
export const Student = styled.option``;

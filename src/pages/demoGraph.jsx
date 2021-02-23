import React, { useState } from "react";
import { Line, Bar, Pie, defaults } from "react-chartjs-2";

import ScrollToTop from "../components/ScrollToTop";
import {
	DashboardContainer,
	DashboardWrapper,
	DashboardHeader,
	HeaderContent,
	ProgressBar,
	DashboardChartsWrapper,
	BarChart,
	LineChart,
	Title,
	Body,
	Score,
	Student,
	Students,
} from "./demoGraphElems";
defaults.global.defaultFontFamily = "'Raleway', sans-serif";

const DemoGraph = () => {
	// const [student, setStudent] = useState([
	// 	{ name: "Anu", avg: 78 },
	// 	{ name: "Chidi", avg: 68 },
	// ]);
	const [score, setScore] = useState(78);
	const studentData = [
		{ name: "Anu", score: 78 },
		{ name: "Chidi", score: 62 },
		{ name: "Bola", score: 54 },
		{ name: "John", score: 60 },
		{ name: "Fred", score: 72 },
		{ name: "Mary", score: 48 },
	];
	const setValue = (e) => {
		const selectStudent = e.target.value;
		console.log(selectStudent);

		const studentInfo = studentData.find(({ name }) => name === selectStudent);
		setScore(studentInfo.score);
	};
	return (
		<>
			<ScrollToTop />
			<DashboardContainer>
				<DashboardWrapper>
					<DashboardHeader>
						<HeaderContent>
							<Title>SS1 Green Test Performance</Title>
							<Body>
								Charts and graphs showcasing the recent perfromances of students
								in SS1 Green in thier Maths, English and Science tests.
							</Body>
						</HeaderContent>
						<ProgressBar>
							<Students onChange={setValue}>
								.<Student value="Anu">Anu</Student>
								<Student value="Chidi">Chidi</Student>
								<Student value="Bola">Bola</Student>
								<Student value="John">John</Student>
								<Student value="Fred">Fred</Student>
								<Student value="Mary">Mary</Student>
							</Students>
							<Score>{score}%</Score>
							<Pie
								data={{
									labels: ["Anu", "null"],
									datasets: [
										{
											borderWidth: 0,
											hoverBorderWidth: 0,
											backgroundColor: ["#0ba86b", "#1a1a1a33"],
											data: [parseInt(score), 100 - parseInt(score)],
										},
									],
								}}
								options={{
									legend: {
										display: false,
									},
									tooltips: {
										enabled: false,
									},
									cutoutPercentage: 90,
								}}
							/>
						</ProgressBar>
					</DashboardHeader>
					<DashboardChartsWrapper>
						<BarChart>
							<Bar
								data={{
									labels: ["Chidi", "Anu", "Bola", "John", "Fred", "Mary"],
									datasets: [
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#0ba86b",
											pointHoverBackgroundColor: "#0ba86b",
											pointHoverBorderWidth: 2,

											// lineTension: 0,
											label: "Maths",
											data: [12, 10, 7, 9, 11, 5],
											backgroundColor: "#0ba86b",
											borderColor: "transparent",
											borderWidth: 2,
										},
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#faae25",
											pointHoverBackgroundColor: "#faae25",
											pointHoverBorderWidth: 2,

											// lineTension: ,
											label: "English",
											data: [19, 15, 6, 14, 12, 8],
											backgroundColor: "#faae25",
											borderColor: "transparent",
											borderWidth: 2,
										},
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#25debf",
											pointHoverBackgroundColor: "#25debf",
											pointHoverBorderWidth: 2,

											// lineTension: ,
											label: "Science",
											data: [13, 14, 9, 17, 15, 9],
											backgroundColor: "#25debf",
											borderColor: "transparent",
											borderWidth: 2,
										},
									],
								}}
								width={50}
								height={50}
								options={{
									tooltips: {
										backgroundColor: "#21302a",
										titleFontFamily: "'Raleway', 'sans-serif'",
										titleFontSize: 14,
									},
									responsive: true,
									maintainAspectRatio: false,
									// aspectRatio: 2.8,
									scales: {
										yAxes: [
											{
												gridLines: {
													// display: false,
													zeroLineColor: "#21302a",
												},
												scaleLabel: {
													display: true,
													labelString: "Scores",
													fontColor: "#21302a",
												},
												id: "Scores",
												type: "linear",
												ticks: {
													fontColor: "#21302a",
													beginAtZero: true,
													suggestedMin: 0,
													suggestedMax: 20,
												},
											},
										],
										xAxes: [
											{
												gridLines: {
													// display: false,
													zeroLineColor: "#21302a",
												},
												scaleLabel: {
													display: true,
													labelString: "Students",
													fontColor: "#21302a",
												},
												ticks: {
													fontColor: "#21302a",
												},
											},
										],
									},
								}}
							/>
						</BarChart>
						<LineChart>
							<Line
								data={{
									labels: ["Chidi", "Anu", "Bola", "John", "Fred", "Mary"],
									datasets: [
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#0ba86b",
											pointHoverBackgroundColor: "#0ba86b",
											pointHoverBorderWidth: 2,

											// lineTension: 0,
											label: "Maths",
											data: [12, 10, 7, 9, 11, 5],
											backgroundColor: ["rgba(255, 99, 132, 0)"],
											borderColor: ["#0ba86b"],
											borderWidth: 2,
										},
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#faae25",
											pointHoverBackgroundColor: "#faae25",
											pointHoverBorderWidth: 2,

											// lineTension: ,
											label: "English",
											data: [19, 15, 6, 14, 12, 8],
											backgroundColor: ["rgba(250 ,174, 37, 0)"],
											borderColor: ["#faae25"],
											borderWidth: 2,
										},
										{
											pointBackgroundColor: "white",
											pointBorderColor: "#25debf",
											pointHoverBackgroundColor: "#25debf",
											pointHoverBorderWidth: 2,

											// lineTension: ,
											label: "Science",
											data: [13, 14, 9, 17, 15, 9],
											backgroundColor: ["rgba(255, 99, 132, 0)"],
											borderColor: ["#25debf"],
											borderWidth: 2,
										},
									],
								}}
								width={50}
								height={50}
								options={{
									events: ["click"],
									tooltips: {
										backgroundColor: "#21302a",
										titleFontFamily: "'Raleway', 'sans-serif'",
										titleFontSize: 14,
										mode: "label",
									},
									responsive: true,
									maintainAspectRatio: false,
									// aspectRatio: 2.8,
									scales: {
										yAxes: [
											{
												gridLines: {
													// display: false,
													zeroLineColor: "#21302a",
												},
												scaleLabel: {
													display: true,
													labelString: "Scores",
													fontColor: "#21302a",
												},
												id: "Scores",
												type: "linear",
												ticks: {
													fontColor: "#21302a",
													beginAtZero: true,
													suggestedMin: 0,
													suggestedMax: 20,
												},
											},
										],
										xAxes: [
											{
												gridLines: {
													// display: false,
													zeroLineColor: "#21302a",
												},
												scaleLabel: {
													display: true,
													labelString: "Students",
													fontColor: "#21302a",
												},
												ticks: {
													fontColor: "#21302a",
												},
											},
										],
									},
								}}
							/>
						</LineChart>
					</DashboardChartsWrapper>
				</DashboardWrapper>
			</DashboardContainer>
		</>
	);
};

export default DemoGraph;

// <Dive>
//
// </Dive>
// <Div>

// </Div>
// <Div>

// </Div>

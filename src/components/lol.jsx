import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";
const Div = styled.div`
	height: 800px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Stuff = (props) => {
	const [item, setItem] = useState({});

	useEffect(() => {
		fetchStuff();
		console.log(props.match);
	}, []);

	const fetchStuff = async () => {
		const stuffData = await fetch(
			`https://jsonplaceholder.typicode.com/photos/${props.match.params.id}`
		);

		const item = await stuffData.json();
		console.log(item);
		setItem(item);
	};
	return (
		<Div>
			<h1>{item.id}</h1>
			<img src={item.url} />
		</Div>
	);
};

export default Stuff;

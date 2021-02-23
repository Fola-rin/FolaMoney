import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";
const Div = styled.div`
	height: 800px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Signup = () => {
	// 	const [items, setItems] = useState([]);
	// 	useEffect(() => {
	// 		fetchStuff();
	// 	}, []);
	// 	const fetchStuff = async () => {
	// 		const data = await fetch("https://jsonplaceholder.typicode.com/photos");

	// 		const items = await data.json();
	// 		console.log(items);
	// 		setItems(items);
	// 	};
	return (
		<Div>
			{/* <h1>
				{items.map((item, index) => (
					<p key={index}>
						<LinkRouter to={`/stuff/${item.id}`}>{item.title}</LinkRouter>
					</p>
				))}
			</h1> */}
			<h1>Page under construction</h1>
		</Div>
	);
};

export default Signup;

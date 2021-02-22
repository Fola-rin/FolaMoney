import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Signup from "./pages/signup";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import lol from "./components/lol";

import dash from "./pages/demoGraph";
function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signup" component={Signup} exact />
				<Route path="/stuff/:id" component={lol} />
				<Route path="/education" component={dash} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

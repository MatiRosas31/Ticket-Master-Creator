import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light bg-transparent">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 fw-bolder">Chat Ticket Generator</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn1 btn-violet">Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

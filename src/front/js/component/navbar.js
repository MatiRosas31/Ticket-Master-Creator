import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light shadow-sm p-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 fw-bolder">Chat Ticket Generator</span>
				</Link>
				<div className="ml-auto">
					<Link to="/landing">
						<button className="btn1 btn-violet">Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

//Backup
{/* <nav className="navbar navbar-light bg-light bg-opacity-25">
<div className="container">
	<Link to="/">
		<span className="navbar-brand mb-0 h1 fw-bolder">Chat Ticket Generator</span>
	</Link>
	<div className="ml-auto">
		<Link to="/landing">
			<button className="btn1 btn-violet">Home</button>
		</Link>
	</div>
</div>
</nav>
); */}


//GPT
{/* <nav className="navbar navbar-light bg-light shadow-sm p-3">
<div className="container">
	<Link to="/">
		<span className="navbar-brand mb-0 h1 fw-bold text-primary">Chat Ticket Generator</span>
	</Link>
	<div className="ml-auto">
		<Link to="/landing">
			<button className="btn btn-primary">Home</button>
		</Link>
	</div>
</div>
</nav> */}
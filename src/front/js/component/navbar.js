import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Chat Ticket Generator</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

// <header className="bg-white shadow-sm">
// <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//   <div className="flex items-center gap-2">
// 	<MessageSquareText className="w-8 h-8 text-indigo-600" />
// 	<h1 className="text-2xl font-bold text-gray-900">Chat Ticket Generator</h1>
//   </div>
// </div>
// </header>
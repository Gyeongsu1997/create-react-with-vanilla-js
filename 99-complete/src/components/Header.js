/** @jsx React.createElement */
import React from "../core/react.js";

function Header({ children }) {
	return (
		<header>
			{children}
		</header>
	);
}

export default Header;
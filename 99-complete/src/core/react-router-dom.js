/** @jsx React.createElement */
import React, { useState } from "./react.js";
import { _resetStates } from "./internal/store.js";

let path = null;
let changePath = null;

function BrowserRouter({ children }) {
	if (path !== window.location.pathname) {
		_resetStates();
	}
	path = window.location.pathname;
	const [_, setPath] = useState(path);

	changePath = nextPath => {
		if (path === nextPath) {
			return;
		}
		window.history.pushState(null, null, nextPath);
		setPath(nextPath);
	};

	window.addEventListener('popstate', () => {
		setPath(window.location.pathname);
	}, { once: true });

	return children[0];
}

function Routes({ children }) {
	let element = null;

	children.forEach(({ props }) => {
		if (props.path === path) {
			element = props.element;
		}
	});
	return element;
}

function Route({ path, element }) {}

function Link({ to, children }) {
	const handleClick = e => {
		e.preventDefault();
		changePath(to);
	};

	return (
		<a href={to} onClick={handleClick}>
			{children}
		</a>
	);
}

const useNavigate = () => {
	return (nextPath) => {
		changePath(nextPath);
	};
};

function Navigate({ to }) {
	useNavigate()(to);
}

export { BrowserRouter, Routes, Route, Link, useNavigate, Navigate };
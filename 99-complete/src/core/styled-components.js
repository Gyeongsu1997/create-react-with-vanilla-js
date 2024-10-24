import React from "./react.js";

const domElements = ['header', 'article', 'div', 'span', 'textarea', 'input', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const styled = (type) => (strs, ...exprs) => ({ children, ...props }) => {
	const style = strs.reduce((result, str, i) => {
		const isFunc = typeof exprs[i] === 'function';
		const value = isFunc ? exprs[i](props) : exprs[i];

		return `${result}${str}${value ? value : ''}`
	}, '');

	return React.createElement(type, { ...props, style }, children);
};

domElements.forEach(domElement => {
	styled[domElement] = styled(domElement);
})

export default styled;
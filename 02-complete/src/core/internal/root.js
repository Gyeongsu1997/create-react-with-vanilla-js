import { _createElement } from "./dom.js"

let $root = null;
let rootComponent = null;

const _render = () => {
	if (!$root || !rootComponent) {
		return;
	}
	const $el = _createElement(rootComponent);
	if ($el === null) {
		return;
	}
	$root.appendChild($el);
};

const _setRoot = (root) => {
	$root = root;
};

const _setRootComponent = (component) => {
	rootComponent = component;
};

export { _render, _setRoot, _setRootComponent };
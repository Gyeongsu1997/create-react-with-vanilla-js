import { debounceFrame } from "./utils.js";
import { _createElement, _diff } from "./dom.js"

let $root = null;
let rootComponent = null;

const _render = debounceFrame(() => {
	if (!$root || !rootComponent) {
		return;
	}
	const newRoot = $root.cloneNode(false);
	newRoot.appendChild(_createElement(rootComponent));
	_diff($root, newRoot);
});

const _setRoot = (root) => {
	$root = root;
};

const _setRootComponent = (component) => {
	rootComponent = component;
};

export { _render, _setRoot, _setRootComponent };
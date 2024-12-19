import { debounceFrame } from "./utils.js";
import { _resetStateKey } from "./store.js";
import { _createElement, _diff } from "./dom.js"

let $root = null;
let rootComponent = null;

const _render = debounceFrame(() => {
	if (!$root || !rootComponent) {
		return;
	}
	const $newRoot = $root.cloneNode(false);
	const $el = _createElement(rootComponent);
	if ($el === null) {
		$root.parentNode.replaceChild($newRoot, $root);
		$root = $newRoot;
		return;
	}
	$newRoot.appendChild($el);
	_diff($root, $newRoot);
	_resetStateKey();
});

const _setRoot = (root) => {
	$root = root;
};

const _setRootComponent = (component) => {
	rootComponent = component;
};

export { _render, _setRoot, _setRootComponent };
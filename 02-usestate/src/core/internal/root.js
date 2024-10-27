import { debounceFrame } from "./utils.js";
import { _resetStoreId } from "./store.js";
import { _createElement } from "./dom.js"

let $root = null;
let rootComponent = null;

const _render = () => {
	if (!$root || !rootComponent) {
		return;
	}
	const $newRoot = $root.cloneNode(false);
	const $el = _createElement(rootComponent);
	if ($el !== null) {
		$newRoot.appendChild($el);
	}
	$root.parentNode.replaceChild($newRoot, $root);
	$root = $newRoot;
	_resetStoreId();
};

const _setRoot = (root) => {
	$root = root;
};

const _setRootComponent = (component) => {
	rootComponent = component;
};

export { _render, _setRoot, _setRootComponent };
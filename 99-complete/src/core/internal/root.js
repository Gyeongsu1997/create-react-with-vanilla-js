import { debounceFrame } from "./utils.js";
import { _resetStoreId } from "./store.js";
import { _createElement, _diff } from "./dom.js"

let $root = null;
let rootComponent = null;
let eventHandlers = {};

const _setEvent = function(eventType, internalInstanceKey, callback) {
	if (!eventHandlers[eventType]) {
		eventHandlers[eventType] = [];
	}
	const handler = event => {
		if (event.target.internalInstanceKey !== internalInstanceKey) {
			return false;
		}
		callback(event);
	};
	eventHandlers[eventType].push(handler);
};

const _addEventListeners = function() {
	for (const eventType in eventHandlers) {
		eventHandlers[eventType].forEach(handler => {
			$root.addEventListener(eventType, handler);
		});
	}
};

const _removeEventListeners = function() {
	for (const eventType in eventHandlers) {
		eventHandlers[eventType].forEach(handler => {
			$root.removeEventListener(eventType, handler);
		});
	}
	eventHandlers = {};
};

const _render = debounceFrame(() => {
	if (!$root || !rootComponent) {
		return;
	}
	_removeEventListeners();
	const $newRoot = $root.cloneNode(false);
	const $el = _createElement(rootComponent);
	if ($el === null) {
		$root.parentNode.replaceChild($newRoot, $root);
		$root = $newRoot;
		return;
	}
	$newRoot.appendChild($el);
	_diff($root, $newRoot);
	_addEventListeners();
	_resetStoreId();
});

const _setRoot = (root) => {
	$root = root;
};

const _setRootComponent = (component) => {
	rootComponent = component;
};

export { _render, _setEvent, _setRoot, _setRootComponent };
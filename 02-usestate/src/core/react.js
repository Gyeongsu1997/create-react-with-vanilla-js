import { _increaseStoreId, _getCurrentState, _getStoreId, _setState, _setCurrentState } from "./internal/store.js";
import { _render } from "./internal/root.js";

const useState = function(initialState) {
	const storeId = _getStoreId();
	_setCurrentState(initialState);
	const state = _getCurrentState();
	const setState = (newState) => {
		if (newState === state) {
			return;
		}
		if (JSON.stringify(newState) === JSON.stringify(state)) {
			return;
		}
		_setState(storeId, newState);
		_render();
	};
	_increaseStoreId();
	return [ state, setState ];
};

const React = {
	createElement: function(type, props, ...children) {
		return { type, props, children: children.flat() };
	}
};

export { useState };
export default React;
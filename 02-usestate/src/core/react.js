import { _getCurrentState, _getCurrentStateKey, _increaseStateKey, _setCurrentState, _setState } from "./internal/store.js";
import { _render } from "./internal/root.js";

const useState = function(initialState) {
	const storeId = _getCurrentStateKey();
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
	_increaseStateKey();
	return [ state, setState ];
};


const React = {
	createElement: function(type, props, ...children) {
		return { type, props, children: children.flat() };
	}
};

export { useState };
export default React;
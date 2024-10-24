import { _increaseStoreId, _getCurrentState, _getStoreId, _setState, _setCurrentState, _createStore } from "./internal/store.js";
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

const useReducer = function(reducer, initialState) {
	_setCurrentState(_createStore(reducer, initialState));
	const state = _getCurrentState();
	state.subscribe(_render);
	_increaseStoreId();
	return [state.getState(), state.dispatch];
};

const useEffect = function(callback, dependencies) {
	const storeId = _getStoreId();
	const oldDependencies = _getCurrentState();

	let hasChanged = true;
	if (oldDependencies) {
		hasChanged = dependencies.some((dep, i) => {
			if (dep !== oldDependencies[i]) {
				return true;
			}
		});
	}

	if (hasChanged) {
		callback();
		_setState(storeId, dependencies);
	}
	_increaseStoreId();
};

const React = {
	createElement: function(type, props = {}, ...children) {
		return { type, props, children: children.flat() };
	}
};

export { useReducer, useState, useEffect };
export default React;
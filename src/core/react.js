import {
  _getCurrentState,
  _getCurrentStateKey,
  _increaseStateKey,
  _setCurrentState,
  _setState,
  _createStore,
} from "./internal/store.js";
import { _render } from "./internal/root.js";

const useEffect = function (callback, dependencies) {
  const storeId = _getCurrentStateKey();
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
  _increaseStateKey();
};

const useReducer = function (reducer, initialState) {
  _setCurrentState(_createStore(reducer, initialState));
  const state = _getCurrentState();
  state.subscribe(_render);
  _increaseStateKey();
  return [state.getState(), state.dispatch];
};

const useState = function (initialState) {
  const stateKey = _getCurrentStateKey();
  _setCurrentState(initialState);
  const state = _getCurrentState();
  const setState = (newState) => {
    if (newState === state) {
      return;
    }
    if (JSON.stringify(newState) === JSON.stringify(state)) {
      return;
    }
    _setState(stateKey, newState);
    _render();
  };
  _increaseStateKey();
  return [state, setState];
};

const React = {
  createElement: function (type, props, ...children) {
    return { type, props, children: children.flat() };
  },
};

export { useEffect, useReducer, useState };
export default React;

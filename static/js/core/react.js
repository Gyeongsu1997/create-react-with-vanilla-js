import { _getCurrentState, _getCurrentStateKey, _increaseStateKey, _setCurrentState, _setState, _createStore } from "./internal/store.js";
import { _render } from "./internal/root.js";
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
  const setState = newState => {
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
    return {
      type,
      props,
      children: children.flat()
    };
  }
};
export { useReducer, useState };
export default React;
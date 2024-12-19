let states = [];
let currentStateKey = 0;
export const _getCurrentState = () => {
  return states[currentStateKey];
};
export const _getCurrentStateKey = () => {
  return currentStateKey;
};
export const _increaseStateKey = () => {
  currentStateKey++;
};
export const _resetStates = () => {
  states = [];
  currentStateKey = 0;
};
export const _resetStateKey = () => {
  currentStateKey = 0;
};
export const _setCurrentState = state => {
  if (currentStateKey < states.length) {
    return;
  }
  states.push(state);
};
export const _setState = (stateKey, state) => {
  states[stateKey] = state;
};
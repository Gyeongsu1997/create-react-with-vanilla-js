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

export const _setCurrentState = (state) => {
	if (currentStateKey < states.length) {
		return;
	}
	states.push(state);
};

export const _setState = (stateKey, state) => {
	states[stateKey] = state;
};

export const _createStore = (reducer, initialState) => {
	let _state = Object.freeze(initialState);
	const subscribers = new Set();

	function getState() {
		return _state;
	}

	function subscribe(callback) {
		subscribers.add(callback);
	}

	function dispatch(action) {
		const newState = reducer(_state, action);
		if (_state === newState) {
			return;
		}
		if (JSON.stringify(_state) === JSON.stringify(newState)) {
			return;
		}
		_state = Object.freeze(newState);
		subscribers.forEach(callback => callback());
	}

	return { getState, subscribe, dispatch };
};
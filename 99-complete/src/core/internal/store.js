let store = [];
let storeId = 0;

export const _getCurrentState = () => {
	return store[storeId];
};

export const _getStoreId = () => {
	return storeId;
};

export const _increaseStoreId = () => {
	storeId++;
};

export const _resetStore = () => {
	store = [];
	storeId = 0;
};

export const _resetStoreId = () => {
	storeId = 0;
};

export const _setCurrentState = (state) => {
	if (storeId < store.length) {
		return;
	}
	store.push(state);
};

export const _setState = (storeId, state) => {
	store[storeId] = state;
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
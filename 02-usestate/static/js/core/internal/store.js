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
export const _setCurrentState = state => {
  if (storeId < store.length) {
    return;
  }
  store.push(state);
};
export const _setState = (storeId, state) => {
  store[storeId] = state;
};
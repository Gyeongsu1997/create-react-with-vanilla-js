import { debounceFrame } from "./utils.js";
import { _resetStateKey } from "./store.js";
import { _createElement, _diff } from "./dom.js";
let $root = null;
let rootComponent = null;
let eventListeners = {};
const _setEvent = function (eventType, eventKey, callback) {
  if (!eventListeners[eventType]) {
    eventListeners[eventType] = [];
  }
  const listener = event => {
    if (event.target.eventKey !== eventKey) {
      return;
    }
    callback(event);
  };
  eventListeners[eventType].push(listener);
};
const _addEventListeners = function () {
  for (const eventType in eventListeners) {
    eventListeners[eventType].forEach(listener => {
      $root.addEventListener(eventType, listener);
    });
  }
};
const _removeEventListeners = function () {
  for (const eventType in eventListeners) {
    eventListeners[eventType].forEach(listener => {
      $root.removeEventListener(eventType, listener);
    });
  }
  eventListeners = {};
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
  _resetStateKey();
});
const _setRoot = root => {
  $root = root;
};
const _setRootComponent = component => {
  rootComponent = component;
};
export { _render, _setEvent, _setRoot, _setRootComponent };
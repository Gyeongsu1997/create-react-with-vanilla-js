import { _createElement } from "./dom.js";
let $root = null;
let rootComponent = null;
const _render = () => {
  if (!$root || !rootComponent) {
    return;
  }
  $root.appendChild(_createElement(rootComponent));
};
const _setRoot = root => {
  $root = root;
};
const _setRootComponent = component => {
  rootComponent = component;
};
export { _render, _setRoot, _setRootComponent };
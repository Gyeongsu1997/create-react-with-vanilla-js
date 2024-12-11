import { _setEvent } from "./root.js";
import { generateRandomId } from "./utils.js";

const _updateAttributes = function(oldChild, newChild) {
	for (const { name, value } of [ ...newChild.attributes ]) {
	  if (value !== oldChild.getAttribute(name)) {
		oldChild.setAttribute(name, value);
	  }
	}
	for (const { name } of [ ...oldChild.attributes ]) {
	  if (newChild.getAttribute(name) === null) {
		oldChild.removeAttribute(name);
	  }
	}
	oldChild.internalInstanceKey = newChild.internalInstanceKey;
};

const _updateElement = function(parent, oldChild, newChild) {
	if (!newChild && oldChild) {
		oldChild.remove();
		return;
	}
	if (newChild && !oldChild) {
		parent.appendChild(newChild);
		return;
	}
	if (newChild instanceof Text && oldChild instanceof Text) {
	  if (oldChild.nodeValue === newChild.nodeValue) {
		return;
	  }
	  oldChild.nodeValue = newChild.nodeValue
	  return;
	}
	if (newChild.nodeName !== oldChild.nodeName) {
	  const index = [ ...parent.childNodes ].indexOf(oldChild);
	  oldChild.remove();
	  parent.insertBefore(newChild, parent.childNodes[index]);
	  return;
	}
	_updateAttributes(oldChild, newChild);
  
	_diff(oldChild, newChild);
};

const _diff = function(oldNode, newNode) {
	const oldChildNodes = [ ...oldNode.childNodes ];
	const newChildNodes = [ ...newNode.childNodes ];

	const max = Math.max(oldChildNodes.length, newChildNodes.length);
	for (let i = 0; i < max; i++) {
	  _updateElement(oldNode, oldChildNodes[i], newChildNodes[i]);
	}
};

const _setAttributes = function($el, props) {
	$el.internalInstanceKey = generateRandomId();
	Object.entries(props || {})
		.filter(([ attr, value ]) => value)
		.forEach(([ attr, value ]) => {
			if (attr.startsWith('on')) {
				_setEvent(attr.slice(2).toLowerCase(), $el.internalInstanceKey, value);
			} else {
				$el.setAttribute(attr, value);
			}
		});
};

const _createElement = function(node) {
	if (node === null || typeof node === 'undefined' || typeof node === 'boolean') {
		return null;
	}
	if (typeof node === 'string' || typeof node === 'number') {
	  	return document.createTextNode(node);
	}
	if (typeof node.type === 'function') {
		return _createElement(node.type({ ...node.props, children: node.children }));
	}
	const $el = document.createElement(node.type);
	_setAttributes($el, node.props);
	node.children.map(_createElement).forEach(child => Boolean(child) && $el.appendChild(child));

	return $el;
};

export { _diff, _createElement };
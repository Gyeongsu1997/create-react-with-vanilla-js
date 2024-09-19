import { generateRandomId } from "./utils.js";

const _updateAttributes = function(oldNode, newNode) {
	for (const { name, value } of [ ...newNode.attributes ]) {
	  if (value !== oldNode.getAttribute(name)) {
		oldNode.setAttribute(name, value);
	  }
	}
	for (const { name } of [ ...oldNode.attributes ]) {
	  if (newNode.getAttribute(name) === null) {
		oldNode.removeAttribute(name);
	  }
	}
};

const _updateElement = function(parent, newNode, oldNode) {
	if (!newNode && oldNode) {
		oldNode.remove();
		return;
	}
	if (newNode && !oldNode) {
		parent.appendChild(newNode);
		return;
	}
	if (newNode instanceof Text && oldNode instanceof Text) {
	  if (oldNode.nodeValue === newNode.nodeValue) {
		return;
	  }
	  oldNode.nodeValue = newNode.nodeValue
	  return;
	}
	if (newNode.nodeName !== oldNode.nodeName) {
	  const index = [ ...parent.childNodes ].indexOf(oldNode);
	  oldNode.remove();
	  parent.insertBefore(newNode, parent.childNodes[index]);
	  return;
	}
	_updateAttributes(oldNode, newNode);
  
	_diff(oldNode, newNode);
};

const _diff = function(oldNode, newNode) {
	const newChildNodes = [ ...newNode.childNodes ];
	const oldChildNodes = [ ...oldNode.childNodes ];

	const max = Math.max(newChildNodes.length, oldChildNodes.length);
	for (let i = 0; i < max; i++) {
	  _updateElement(oldNode, newChildNodes[i], oldChildNodes[i]);
	}
};

const _setAttributes = function($el, props) {
	Object.entries(props || {})
		.filter(([ value ]) => value)
		.forEach(([ attr, value ]) => {
			$el.setAttribute(attr, value);
		});
};

const _createElement = function(node) {
	if (node === null || typeof node === 'undefined' || typeof node === 'boolean') {
		return null;
	}
	if (typeof node === 'string' || typeof node === 'number') {
	  	return document.createTextNode(node);
	}
	// 이 부분이 핵심입니다. node의 type이 함수라면 props와 children을 인자로 해서 함수를 호출합니다.  
	if (typeof node.type === 'function') {
		return _createElement(node.type({ ...node.props, children: node.children }));
	}
	const $el = document.createElement(node.type);
	_setAttributes($el, node.props);
	node.children.map(_createElement).filter(Boolean).forEach(child => $el.appendChild(child));

	return $el;
};

export { _diff, _createElement };
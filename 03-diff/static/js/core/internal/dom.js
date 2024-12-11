const _updateAttributes = function (oldNode, newNode) {
  for (const {
    name,
    value
  } of [...newNode.attributes]) {
    if (value !== oldNode.getAttribute(name)) {
      oldNode.setAttribute(name, value);
    }
  }
  for (const {
    name
  } of [...oldNode.attributes]) {
    if (newNode.getAttribute(name) === null) {
      oldNode.removeAttribute(name);
    }
  }
  oldNode.internalInstanceKey = newNode.internalInstanceKey;
};
const _updateElement = function (parent, oldNode, newNode) {
  // 1. 노드가 삭제된 경우
  if (!newNode && oldNode) {
    oldNode.remove();
    return;
  }
  // 2. 노드가 새롭게 추가된 경우
  if (newNode && !oldNode) {
    parent.appendChild(newNode);
    return;
  }
  // 3. 텍스트 노드인 경우에는 값을 비교해서 달라진 경우에만 값을 덮어씌웁니다.
  if (newNode instanceof Text && oldNode instanceof Text) {
    if (oldNode.nodeValue === newNode.nodeValue) {
      return;
    }
    oldNode.nodeValue = newNode.nodeValue;
    return;
  }
  // 4. 노드의 태그 이름이 다른 경우에는 속성을 비교할 필요 없이 대체합니다.
  if (newNode.nodeName !== oldNode.nodeName) {
    const index = [...parent.childNodes].indexOf(oldNode);
    oldNode.remove();
    parent.insertBefore(newNode, parent.childNodes[index]);
    return;
  }
  // 5. 노드의 태그 이름이 같은 경우 속성을 비교해 달라진 속성만을 반영합니다.
  _updateAttributes(oldNode, newNode);
  _diff(oldNode, newNode);
};
const _diff = function (oldNode, newNode) {
  const oldChildNodes = [...oldNode.childNodes];
  const newChildNodes = [...newNode.childNodes];
  const max = Math.max(oldChildNodes.length, newChildNodes.length);
  for (let i = 0; i < max; i++) {
    _updateElement(oldNode, oldChildNodes[i], newChildNodes[i]);
  }
};
const _setAttributes = function ($el, props) {
  Object.entries(props || {}).filter(([attr, value]) => value).forEach(([attr, value]) => {
    if (attr.startsWith('on')) {
      $el.addEventListener(attr.slice(2).toLowerCase(), value);
    } else {
      $el.setAttribute(attr, value);
    }
  });
};
const _createElement = function (node) {
  if (node === null || typeof node === 'undefined' || typeof node === 'boolean') {
    return null;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return document.createTextNode(node);
  }
  if (typeof node.type === 'function') {
    return _createElement(node.type({
      ...node.props,
      children: node.children
    }));
  }
  const $el = document.createElement(node.type);
  _setAttributes($el, node.props);
  node.children.map(_createElement).forEach(child => Boolean(child) && $el.appendChild(child));
  return $el;
};
export { _diff, _createElement };
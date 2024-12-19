const _updateAttributes = function (oldChild, newChild) {
  // 달라진 속성을 반영한다.
  for (const {
    name,
    value
  } of [...newChild.attributes]) {
    if (value !== oldChild.getAttribute(name)) {
      oldChild.setAttribute(name, value);
    }
  }
  // 없어진 속성을 제거한다.
  for (const {
    name
  } of [...oldChild.attributes]) {
    if (newChild.getAttribute(name) === null) {
      oldChild.removeAttribute(name);
    }
  }
};
const _updateElement = function (parent, oldChild, newChild) {
  // 1. 자식 노드가 삭제된 경우
  if (!newChild && oldChild) {
    oldChild.remove();
    return;
  }
  // 2. 자식 노드가 새롭게 추가된 경우
  if (newChild && !oldChild) {
    parent.appendChild(newChild);
    return;
  }
  // 3. 자식 노드가 텍스트 노드인 경우에는 값을 비교해서 달라진 경우에만 값을 덮어씌웁니다.
  if (newChild instanceof Text && oldChild instanceof Text) {
    if (oldChild.nodeValue === newChild.nodeValue) {
      return;
    }
    oldChild.nodeValue = newChild.nodeValue;
    return;
  }
  // 4. 기존 자식 노드와 새 자식 노드의 태그 이름이 다른 경우에는 속성을 비교할 필요 없이 대체합니다.
  if (newChild.nodeName !== oldChild.nodeName) {
    const index = [...parent.childNodes].indexOf(oldChild);
    oldChild.remove();
    parent.insertBefore(newChild, parent.childNodes[index]);
    return;
  }
  // 5. 자식 노드의 태그 이름이 서로 같은 경우 속성을 비교해 달라진 속성만을 반영합니다.
  _updateAttributes(oldChild, newChild);
  _diff(oldChild, newChild);
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
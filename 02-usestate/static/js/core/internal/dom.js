const _setAttributes = function ($el, props) {
  Object.entries(props || {}).filter(([attr, value]) => value).forEach(([attr, value]) => {
    // 변경된 코드 시작
    if (attr.startsWith('on')) {
      $el.addEventListener(attr.slice(2).toLowerCase(), value);
    } else {
      $el.setAttribute(attr, value);
    }
    // 변경된 코드 끝
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
export { _createElement };
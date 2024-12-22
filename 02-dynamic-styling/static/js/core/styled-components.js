import React from './react.js';
import domElements from './internal/domElements.js';
const styled = tag => (strs, ...exprs) => ({
  children,
  ...props
}) => {
  const style = strs.reduce((result, str, i) => {
    const isFunc = typeof exprs[i] === 'function';
    const value = isFunc ? exprs[i](props) : exprs[i];
    return `${result}${str}${value ? value : ''}`;
  }, '');
  return React.createElement(tag, {
    ...props,
    style
  }, children);
};
domElements.forEach(domElement => {
  styled[domElement] = styled(domElement);
});
export default styled;
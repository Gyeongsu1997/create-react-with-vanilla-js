import React from './react.js';
import domElements from './internal/domElements.js';

const styled = (tag) => (strs, ...exprs) => ({ children, ...props }) => {
    const style = strs.reduce((result, str, i) => {
      const isFunc = typeof exprs[i] === 'function';
      const value = isFunc ? exprs[i](props) : exprs[i];

      return `${result}${str}${value ? value : ''}`;
    }, '');

    return React.createElement(tag, { ...props, style }, children);
};

const elements = [
    'a',
    'article',
    'aside',
    'body',
    'button',
    'div',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'label',
    'li',
    'link',
    'meta',
    'nav',
    'p',
    'script',
    'section',
    'span',
    'strong',
    'style',
    'textarea',
    'ul',
    'image',
];
  
const domElements = new Set(elements);

domElements.forEach(domElement => {
	styled[domElement] = styled(domElement);
});

export default styled;
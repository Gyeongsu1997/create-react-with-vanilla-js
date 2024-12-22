import React from './react.js';

const styled = (tag) => (strs, ...exprs) => ({ children, ...props }) => {
    const style = strs.reduce((result, str, i) => {
      const isFunc = typeof exprs[i] === 'function';
      const value = isFunc ? exprs[i](props) : exprs[i];

      return `${result}${str}${value ? value : ''}`;
    }, '');

    return React.createElement(tag, { ...props, style }, children);
};

export default styled;
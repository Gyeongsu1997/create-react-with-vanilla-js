const styled = {
  div: function (styles) {
    return function (texts, ...elements) {
      const innerHTML = texts.reduce((result, text, i) => `${result}${text}${elements[i] ? elements[i] : ''}`, '');
      return `<div style="${styles}">${innerHTML}</div>`;
    };
  },
  h1: function (styles) {
    return function (texts, ...elements) {
      const innerHTML = texts.reduce((result, text, i) => `${result}${text}${elements[i] ? elements[i] : ''}`, '');
      return `<h1 style="${styles}">${innerHTML}</h1>`;
    };
  }
};
export default styled;
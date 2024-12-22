/** @jsx React.createElement */
import React from './core/react.js';
import styled from './core/styled-components.js';
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid;
  border-radius: 50%;
  ${props => props.theme === 'black' && 'color: white; background-color: black;'}
  text-align: center;
  line-height: 200px;
`;
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Circle, {
    theme: "black"
  }, "Hello, World!"), /*#__PURE__*/React.createElement(Circle, null, "\uC548\uB155\uD558\uC138\uC694"));
}
export default App;
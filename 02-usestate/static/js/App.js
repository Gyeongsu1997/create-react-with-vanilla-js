/** @jsx React.createElement */
import React, { useState } from "./core/react.js";
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000000");
  const onClick = () => {
    setColor(getRandomColor());
  };
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, "\uC0C9\uC0C1 \uBCC0\uACBD"), /*#__PURE__*/React.createElement("h1", {
    style: `color: ${color}`
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: onIncrease
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: onDecrease
  }, "-1"));
}
;
export default App;
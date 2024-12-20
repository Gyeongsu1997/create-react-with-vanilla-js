/** @jsx React.createElement */
import React, { useState } from "../core/react.js";
function Counter() {
  const [count, setCount] = useState(0);
  window.onIncrease = () => {
    setCount(count + 1);
  };
  window.onDecrease = () => {
    setCount(count - 1);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: "onIncrease()"
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: "onDecrease()"
  }, "-1"));
}
export default Counter;
/** @jsx React.createElement */
import React, { useState } from "./core/react.js";
function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "count: ", /*#__PURE__*/React.createElement("span", null, count)), /*#__PURE__*/React.createElement("button", {
    onClick: onIncrease
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: onDecrease
  }, "-1"));
}
;
export default App;
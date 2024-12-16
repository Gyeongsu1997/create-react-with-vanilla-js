/** @jsx React.createElement */
import React from "./core/react.js";
import Counter from "./components/Counter.js";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Counter, null), /*#__PURE__*/React.createElement(Counter, null));
}
;
export default App;
/** @jsx React.createElement */
import React from "../core/react.js";
function Article({
  title,
  author,
  content
}) {
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", {
    class: "text-end"
  }, author)), /*#__PURE__*/React.createElement("p", null, content));
}
export default Article;
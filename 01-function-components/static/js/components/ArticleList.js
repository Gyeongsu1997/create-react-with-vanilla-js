/** @jsx React.createElement */
import React from "../core/react.js";
import Article from "./Article.js";
function ArticleList({
  articles
}) {
  return /*#__PURE__*/React.createElement("section", {
    class: "flex-container"
  }, articles.map(({
    title,
    author,
    content
  }) => /*#__PURE__*/React.createElement(Article, {
    title: title,
    author: author,
    content: content
  })));
}
export default ArticleList;
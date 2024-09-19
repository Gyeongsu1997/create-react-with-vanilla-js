/** @jsx React.createElement */
import React from "../core/react.js";
import Article from "./Article.js";

function ArticleList({ articles }) {
	return (
		<section class="flex-container">
			{articles.map(({ title, author, content}) => (
				<Article title={title} author={author} content={content} />
			))}
		</section>
	);
}

export default ArticleList;
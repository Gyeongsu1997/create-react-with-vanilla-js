/** @jsx React.createElement */
import React from "../core/react.js";

function Article({ title, author, content}) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p class="text-end">{author}</p>
			</div>
			<p>{content}</p>
		</article>
	);
}

export default Article;
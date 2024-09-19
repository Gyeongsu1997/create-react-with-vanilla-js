/** @jsx React.createElement */
import React from "./core/react.js";
import Header from "./components/Header.js"
import ArticleList from "./components/ArticleList.js";

const articles = [
	{
		title: "첫사랑",
		author: "이윤학",
		content: `
		그대가 꺾어준 꽃
		시들 때 까지 들여다 보았네
		그대가 남기고 간 시든 꽃
		다시 필 때까지`
	},
	{
		title: "호수",
		author: "정지용",
		content: `
		얼굴 하나야
		손가락 둘로
		푹 가리지만
		
		보고싶은 마음
		호수만 하니눈
		감을 수 밖에`
	},
	{
		title: "풀꽃",
		author: "나태주",
		content: `
		자세히 보아야 예쁘다
		오래 보아야 사랑스럽다
		너도 그렇다
		`
	}
];

function App() {
	return (
		<div>
			<Header>
				<h1 class="text-center">
					아름다운 한국의 명시
				</h1>
			</Header>
			<ArticleList articles={articles} />
		</div>
	);
};

export default App;
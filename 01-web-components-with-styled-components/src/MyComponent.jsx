/** @jsx h */
import styled from "../StyledComponents.js";

function h(type, props, ...children) {
	return { type, props, children: children.flat() };
}

const Wrapper = styled.div`
	width: 360px;
	height: 360px;
	margin: 0 auto;
	padding: 10px;
	border-radius: 30px;
	background-color: whitesmoke;
`;

const Title = styled.h1`
	text-align: center;
`

function MyComponent() {
	return (
		<Wrapper>
			<Title>제목</Title>
			<p>내용입니다.</p>
		</Wrapper>
	);
}
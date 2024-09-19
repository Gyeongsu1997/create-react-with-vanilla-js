/** @jsx h */
import styled from "./StyledComponents.js";
function h(type, props, ...children) {
  return {
    type,
    props,
    children: children.flat()
  };
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
`;
function MyComponent() {
  return h(Wrapper, null, h(Title, null, "\uC81C\uBAA9"), h("p", null, "\uB0B4\uC6A9\uC785\uB2C8\uB2E4."));
}
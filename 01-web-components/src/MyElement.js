import styled from "./StyledComponents.js";

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

class MyElement extends HTMLElement {
	#shadow;

	constructor() {
		super();
		this.#shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.#shadow.innerHTML = this.render();
	}

	render() {
		return (
			Wrapper`
				${Title`제목`}
				<p>내용입니다.</p>
		`);
	}
}

customElements.define('my-element', MyElement);
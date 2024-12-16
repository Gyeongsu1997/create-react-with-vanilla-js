/** @jsx React.createElement */
import React, { useState } from "./core/react.js";

const getRandomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function App() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("#000000");

	const onClick = () => {
		setColor(getRandomColor());
	};

	const onIncrease = () => {
		setCount(count + 1);
	};

	const onDecrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<button onClick={onClick}>색상 변경</button>
			<h1 style={`color: ${color}`}>{count}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
};

export default App;
/** @jsx React.createElement */
import React, { useState } from "../core/react.js";

function Counter() {
	const [count, setCount] = useState(0);

	const onIncrease = () => {
		setCount(count + 1);
	};

	const onDecrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

export default Counter;
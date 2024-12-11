/** @jsx React.createElement */
import React, { useState } from "./core/react.js";

function App() {
	const [count, setCount] = useState(0);

	const onIncrease = () => {
		setCount(count + 1);
	};

	const onDecrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p>count: <span>{count}</span></p>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
};

export default App;
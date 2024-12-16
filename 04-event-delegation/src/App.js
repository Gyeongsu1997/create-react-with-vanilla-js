/** @jsx React.createElement */
import React from "./core/react.js";
import Counter from "./components/Counter.js";

function App() {
	return (
		<div>
			<Counter />
			<Counter />
		</div>
	);
};

export default App;
import { _setRoot, _setRootComponent, _render } from "./internal/root.js";

const ReactDOM = {
	render: function(component, root) {
		_setRootComponent(component);
		_setRoot(root);
		_render();
	}
}

export default ReactDOM;
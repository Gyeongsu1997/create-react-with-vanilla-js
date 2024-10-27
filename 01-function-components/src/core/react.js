const React = {
	createElement: function(type, props, ...children) {
		return { type, props, children: children.flat() };
	}
};

export default React;
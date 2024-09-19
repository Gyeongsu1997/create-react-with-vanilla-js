export const debounceFrame = (callback) => {
	let nextFrameCallback = -1;
	return () => {
		cancelAnimationFrame(nextFrameCallback);
		nextFrameCallback = requestAnimationFrame(callback);
	};
}

export const generateRandomId = () => {
	return Math.random().toString(36).slice(2);
}
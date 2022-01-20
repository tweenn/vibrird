
const id = 'unity-canvas';
const filename = unityConfiguration.canvas.background.filename;
const backgroundColor = unityConfiguration.canvas.background.color;
const width = unityConfiguration.canvas.width;
const height = unityConfiguration.canvas.height;

let finalWidth = width;
let finalHeight = height;

const calculateCanvasSize = () => {
	const bodyWidth = document.body.offsetWidth;
	const bodyHeight = document.body.offsetHeight;

	finalWidth = bodyWidth;
	finalHeight = (bodyWidth / 16) * 9;

	if (finalHeight > bodyHeight) {
		finalWidth = (bodyHeight / 9) * 16;
		finalHeight = bodyHeight;
	}

	finalWidth = parseInt(finalWidth);
	finalHeight = parseInt(finalHeight);
}

const addCanvasHTML = () => {
	document.body.insertAdjacentHTML('beforeend', `
		<canvas id="${id}"></canvas>
	`);
};

const buildCanvasCSS = () => {
	return `
		#unity-canvas {
			width: ${finalWidth}px;
			height: ${finalHeight}px;
			max-width: ${finalWidth * window.devicePixelRatio}px;
			max-height: ${finalHeight * window.devicePixelRatio}px;
			background: ${filename ? 'url(\'Build/' + filename.replace(/'/g, '%27') + '\') center / cover' : backgroundColor }}};
		}
	`;
}

const addCanvasCSS = () => {
	document.body.insertAdjacentHTML('beforeend', `
		<style id="${id}-style">
			${buildCanvasCSS()}
		</style>
	`);
};

const resizeCanvas = () => {
	document.getElementById(`${id}-style`).innerHTML = buildCanvasCSS();
};

const addOrientationChangeEvent = () => {
	window.addEventListener("orientationchange", async function (event) {
		await new Promise(r => setTimeout(r, 100));
		calculateCanvasSize();
		resizeCanvas();
	});
};

const init = () => {
	calculateCanvasSize();
	addCanvasHTML()
	addCanvasCSS()
	addOrientationChangeEvent();
	createUnityInstance(document.querySelector(`#${id}`), unityConfiguration.instance)
		.then((unityInstance) => {
			window.unityInstance = unityInstance;
		});
};

export default init;

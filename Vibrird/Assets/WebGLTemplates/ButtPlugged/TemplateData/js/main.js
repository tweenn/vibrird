
import Canvas from './canvas/index.js';
import Buttplug from './buttplug/index.js';

const init = async () => {
	await Buttplug();
	Canvas();
}

init();


const id = 'unity-canvas';
const filename = unityConfiguration.canvas.background.filename;
const backgroundColor = unityConfiguration.canvas.background.color;
const width = unityConfiguration.canvas.width;
const height = unityConfiguration.canvas.height;


const addCanvasHTML = () => {
    document.body.insertAdjacentHTML('beforeend', `
        <canvas
            id="${id}"
            width="${width}"
            height="${height}"
        ></canvas>
    `);
};

const addCanvasCSS = () => {

    document.body.insertAdjacentHTML('beforeend', `
        <style>
            #unity-canvas {
                width: ${width}px;
                height: ${height}px;
                background: ${filename ? 'url(\'Build/' + filename.replace(/'/g, '%27') + '\') center / cover' : backgroundColor }}};
            }
        </style>
    `);
};

const init = () => {
    addCanvasHTML()
    addCanvasCSS()
    createUnityInstance(document.querySelector(`#${id}`), unityConfiguration.instance);
};

export default init;
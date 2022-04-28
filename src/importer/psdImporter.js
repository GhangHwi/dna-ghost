const PSD = require('psd.js');

let psds = {};

function loadPsd(scene, key, path){
    PSD.fromURL(path).then(function(psd) {
        psds[key] = psd;
        scene.load.image('psd', psd.image.toPng());
    });
}

function addPsd(scene, key){
    // scene.add(0, 0, 'psd');
}

export { loadPsd, addPsd };
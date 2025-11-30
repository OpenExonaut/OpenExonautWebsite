let gamedata = {};

let docLoaded = false;
let gamedataLoaded = false;
let gamedataCallback = () => { };

function getGamedata(callback) {
    if (!gamedataLoaded) {
        fetch('https://beta.openexonaut.xyz/exonaut/gamedata.json')
            .then(response => response.json())
            .then(json => {
                gamedata = json;
                gamedataCallback = callback;
                gamedataLoaded = true;
                if (docLoaded) {
                    gamedataCallback();
                }
            });
    }
}

function onDocumentLoad() {
    docLoaded = true;
    if (gamedataLoaded) {
        gamedataCallback();
    }
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
docLoaded = document.readyState === "interactive" || document.readyState === "complete";

// ==UserScript==
// @name         place celmax
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est dû de droit.
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       celmax
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @downloadURL  https://github.com/celmax85/place/celmax.js?v=1.03
// @updateURL    https://github.com/celmax85/place/celmax.js?v=1.03
// ==/UserScript==
const IMG_URL = 'https://github.com/celmax/place/all.png?v=1.03'
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = IMG_URL;
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            i.src = "https://github.com/celmax/place/all.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

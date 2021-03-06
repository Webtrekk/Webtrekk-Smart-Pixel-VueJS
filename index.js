/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
const webtrekkSmartPixel = require("webtrekk-smart-pixel");
const WebtrekkSmartPixelVueJS = require("./lib/smart-pixel-vuejs");

/**
 * @type {WebtrekkSmartPixelVueJS}
 */
module.exports = new WebtrekkSmartPixelVueJS(webtrekkSmartPixel);

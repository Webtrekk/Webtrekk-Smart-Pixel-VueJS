/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
const webtrekkSmartPixel = require("webtrekk-smart-pixel");
import WebtrekkSmartPixelVueJS from "./lib/smart-pixel-vuejs";

/**
 * @type {WebtrekkSmartPixelVueJS}
 */
export default new WebtrekkSmartPixelVueJS(webtrekkSmartPixel);

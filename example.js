const webtrekkSmartPixelVueJS = require("./debug");

/**
 * @constructor
 */
var ApplicationTracking = function() {
    this.init = function() {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.init.set({
                trackId: '123451234512345',
                trackDomain: 'data.wt-eu02.net'
            });
        });
    };

    this.page = function(name, data) {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.page.data.set(name, data);
        });
    };

    this.action = function(data) {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.action.data.set(data);
        });
    };

    this.track = function() {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.track();
        });
    };

    this.trackPage = function() {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.trackPage();
        });
    };

    this.trackAction = function() {
        webtrekkSmartPixelVueJS.call(function(wtSmart) {
            wtSmart.trackAction();
        });
    };
};

module.exports = new ApplicationTracking();

# Webtrekk Smart Pixel Vue.js

[Site](https://www.webtrekk.com/) |
[Docs](https://docs.webtrekk.com/display/WSP/) |
[Support](https://support.webtrekk.com/) |
[Changelog](./CHANGELOG.md) |

## Installation

Using npm:

```shell
$ npm i webtrekk-smart-pixel-vuejs
```

## Integration

* Create a class and use this as interface between your application and the Webtrekk Smart Pixel

```js
// load the minified build
import webtrekkSmartPixelVueJS from "webtrekk-smart-pixel-vuejs";

// load the debug build
import webtrekkSmartPixelVueJS from "webtrekk-smart-pixel-vuejs/debug";

/**
 * @constructor
 */
var ApplicationTracking = function() {
	// ...
};

export default new ApplicationTracking();
```

* Implement all your tracking functionalities which you need for the application

```js
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
```

* Import *ApplicationTracking* in all your **Components** and **Pages**, which should be tracked or provide tracking data

```js
// layouts/default.vue

<template>
    <div>
        <nuxt/>
    </div>
</template>

<script>
    import applicationTracking from './../plugins/ApplicationTracking';

    export default {
        beforeMount: function() {
            applicationTracking.init();
        }
    };
</script>
```

```js
// pages/index.vue

<template>
    <div class="contain">
      <app-sidebar/>
      <app-content class="content"/>
    </div>
</template>

<script>
    import AppSidebar from './../components/AppSidebar.vue';
    import AppContent from './../components/AppContent.vue';
    import applicationTracking from './../plugins/ApplicationTracking';

    export default {
        components: {
            AppSidebar,
            AppContent
        },
        data() {
            return {
                language: 'en'
            };
        },
        mounted: function() {
            applicationTracking.page(`${this.language}.index`);
            applicationTracking.trackPage();
        }
    };
</script>
```

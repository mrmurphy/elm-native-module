# Elm Native Module

This module is intended to be used only within javascript files
written for Elm's native modules.

## Useage

`npm install elm-native-module`

From within `/src/Native/Foo.js`

```javascript
var ElmNativeModule = require('elm-native-module')

ElmNativeModule(Elm, 'Foo', {
	bar: function() {return 'Bar'}
})
```

Note that the Elm object is passed in as the first argument.

## Notice!

You'll need to be using a script bundler like Webpack, or Browserify to take
care of the require statements for browsers.

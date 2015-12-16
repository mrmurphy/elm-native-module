// This snippet was written by Tom Ashworth. I pulled it from
// https://phuu.net/2014/10/29/elm-native-modules.html

module.exports = function ElmNativeModule(name, values) {
    Elm.Native[name] = {};
    Elm.Native[name].make = function(elm) {
        elm.Native = elm.Native || {};
        elm.Native[name] = elm.Native[name] || {};
        if (elm.Native[name].values) return elm.Native[name].values;
        return elm.Native[name].values = values;
    };
}

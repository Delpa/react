(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var jQuery = require('jquery');

(function (yourcode) {

// The global jQuery object is passed as a parameter
yourcode(jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function () {
console.log('olsdfsdfdsis');  
    
    });

    // The rest of the code goes here!
}));
exports['default'];
},{"jquery":"jquery"}],2:[function(require,module,exports){
var jQuery = require('jquery');
(function (yourcode) {

// The global jQuery object is passed as a parameter
yourcode(jQuery, window, document);

}(function ($, window, document) {

    // The $ is now locally scoped 

    // Listen for the jQuery ready event on the document
    $(function () {

    });

    // The rest of the code goes here!
}));
exports['default'];
},{"jquery":"jquery"}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
require('./js1');
require('./js2');
require('./js3');
},{"./js1":1,"./js2":2,"./js3":3}]},{},[4]);

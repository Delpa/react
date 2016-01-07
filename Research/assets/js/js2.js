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
// --------------------------------------------------------------------------
// application.js
// --------------------------------------------------------------------------
// This file imports and initialises modules.
//
// Add module names to the modules array for automatic initialisation.
//
// No specific javascript should be placed in this file.
// --------------------------------------------------------------------------

$(function () {

    'use strict';

    if (location.hostname == "localhost" || location.hostname == "0.0.0.0" ) {
        $('head').append('<script src="http://localhost:35729/livereload.js?snipver=1"></' + 'script>');
    };

    FastClick.attach(document.body);

    var modules = ['animations', 'cookies'];

    for (var i = 0; i < modules.length; i++) {
        DG[modules[i]].init();
    }

});
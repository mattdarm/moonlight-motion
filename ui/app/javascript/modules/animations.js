DG.animations = function() {

  'use strict';

  function init() {
    logotypeMM();
  }

  function logotypeMM() {
        setTimeout(function () {
            $('.logo__leftM').animate({
                left: '36%',
            }, 1000);
            $('.logo__rightM').animate({
                left: '44%',
            }, 1000);
        }, 2500);

  }

  return {
    init: init
  };

}();
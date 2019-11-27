// Cookies
DG.cookies = function () {

    function animateCookies() {
      if (!readCookie('acceptCookie') >= 1) {
        bh('cookie-bar').slideDown();
        bh('accept-cookie').on('click', accept);
      }
    }
  
    animateCookies();
  
    function accept() {
      bh('cookie-bar').slideUp();
  
      createCookie('acceptCookie', 1, 2147483647);
    };
  
    // set cookie
    function createCookie(name, value, days) {
      var expires;
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
      } else {
        expires = '';
      }
      document.cookie = name + '=' + value + expires + '; path=/';
    };
  
    // read cookie
    function readCookie(name){
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    };
  
  }();
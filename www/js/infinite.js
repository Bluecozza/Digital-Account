/* Full Framework 7 infinite scroll documentation can be found here: http://www.idangero.us/framework7/docs/infinite-scroll.html */
/*global myApp, $$, alert  */
(function() {
    "use strict";
    function prepare_infinite_scrolling(){
      $$('.infinite-scroll').on('infinite', function() {
        //make sure to include this line, otherwise multiple events will be fired
        myApp.detachInfiniteScroll($$('.infinite-scroll'));
        alert('Infinite scrolling action');
      });
    }
    document.addEventListener("app.Ready", prepare_infinite_scrolling, false);
})();

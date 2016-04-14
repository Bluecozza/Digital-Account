/*
 * The code that shold be run when the app is refreshed goes here
 * For examples and documentation visit http://www.idangero.us/framework7/docs/pull-to-refresh.html
 */
/*global $$, myApp, alert */
(function() {
    "use strict";
    function prepare_pull_to_refresh(){
      $$('.pull-to-refresh-content').on('refresh', function() {
        setTimeout(function () {
          myApp.pullToRefreshDone();
          alert('Pull to refresh fired');
        }, 2000);
      });
    }
    document.addEventListener("app.Ready", prepare_pull_to_refresh, false);
})();

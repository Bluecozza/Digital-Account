/*
 * Full Framework 7 calendar documentation can be found here: http://www.idangero.us/framework7/docs/calendar.html
 * Make sure the 'container' field matches the id of your calendar widget in App Designer.
 */
/*global myApp, $$  */
(function() {
    "use strict";
    function prepare_calendar(){
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];

        var calendarInline = myApp.calendar({
            container: '#calendar-inline-container',
            value: [new Date()],
            weekHeader: false,
            toolbarTemplate:
                '<div class="toolbar calendar-custom-toolbar">' +
                    '<div class="toolbar-inner">' +
                        '<div class="left">' +
                            '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                        '</div>' +
                        '<div class="center"></div>' +
                        '<div class="right">' +
                            '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                        '</div>' +
                    '</div>' +
                '</div>',
            onOpen: function (p) {
                $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
                $$('.calendar-custom-toolbar .left .link').on('click', function () {
                    calendarInline.prevMonth();
                });
                $$('.calendar-custom-toolbar .right .link').on('click', function () {
                    calendarInline.nextMonth();
                });
            },
            onMonthYearChangeStart: function (p) {
                $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
            }
        });
    }
    document.addEventListener("app.Ready", prepare_calendar, false);
})();

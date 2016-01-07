// Project page prototype for checkdesk.
// 
$(document).ready(function() {
  // Toggle the reports
  //
  $('.js-show-report').click(function(e) {
    $(this).prev().slideToggle();
    e.preventDefault();
  });
});

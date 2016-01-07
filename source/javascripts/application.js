//= require "vendor/jquery"
//= require "vendor/underscore"
//= require "vendor/backbone"
//= require "main"
//= require "models/meme"
//= require "views/meme-canvas"
//= require "views/meme-editor"
//= require "helpers/font-monitor"
//= require "helpers/ease-in"


// The more-options section of the form
// 
$(document).ready(function() {
  $('.more-options.js-toggle').hide();
  $('.more-options-button a').click(function(e) {
    $('.more-options.js-toggle').toggle();
    $('.more-options.js-toggle').addClass('.js-last');
    e.preventDefault();
  });

  // Render the querystring 
  // for the link detail page prototype support
  // 
  // Eg: http://10.0.1.3:4567/prototype/desk/bellingcat?view=table
  // Will create a class on the body element "table"
  $('.js-queries').append(queries.view + " view");
  $('body').addClass(queries.view);

  // Toggle the reports
  //
  $('.js-show-report').click(function(e) {
    $(this).prev().slideToggle();
    e.preventDefault();
  });

});

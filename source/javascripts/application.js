//= require "vendor/jquery"
//= require "vendor/underscore"
//= require "vendor/backbone"
//= require "main"
//= require "models/meme"
//= require "views/meme-canvas"
//= require "views/meme-editor"
//= require "helpers/font-monitor"
//= require "helpers/ease-in"
//= require "vendor/share-button.min"
//= require "settings.share-button"

$(document).ready(function() {
  $('.more-options.js-toggle').hide();
  $('.more-options-button a').click(function(e) {
    $('.more-options.js-toggle').toggle();
    $('.more-options.js-toggle').addClass('.js-last');
    e.preventDefault();
  });
});
